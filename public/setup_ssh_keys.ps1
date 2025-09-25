param (
    [string]$HostName,               # Example: github.com, gitlab.com, bitbucket.org
    [string]$Email
)

if (-not $HostName -or -not $Email) {
    Write-Error "❌ Usage: .\setup_ssh_keys.ps1 <hostname> your_email@example.com"
    exit 1
}

$sshDir = "$HOME\.ssh"
# Normalize hostname for filename (replace dots with underscores)
$keyName = "id_" + ($HostName -replace '\.', '_')
$keyPath = Join-Path $sshDir $keyName
$configFile = Join-Path $sshDir "config"

# Ensure .ssh directory exists
if (!(Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir | Out-Null
}
icacls $sshDir /inheritance:r /grant:r "$env:USERNAME:F" | Out-Null

# Generate key if missing
if (!(Test-Path $keyPath)) {
    Write-Output "🔑 Generating SSH key for $HostName..."
    ssh-keygen -t ed25519 -f $keyPath -C $Email -N "" | Out-Null
} else {
    Write-Warning "⚠️  Key for $HostName already exists — skipping."
}

# Create config file if missing
if (!(Test-Path $configFile)) {
    New-Item -ItemType File -Path $configFile | Out-Null
}
# Ensure proper permissions
icacls $configFile /inheritance:r /grant:r "$env:USERNAME:F" | Out-Null

# Append SSH config if not present
if ((Test-Path $keyPath) -and !(Select-String -Path $configFile -Pattern "Host $HostName" -Quiet)) {
    Add-Content $configFile @"
Host $HostName
    HostName $HostName
    User git
    IdentityFile $keyPath
    IdentitiesOnly yes

"@
}

# Summary
Write-Host "`n✅ SSH setup complete for $HostName.`n"
Write-Host "📎 To copy your public key, run:"
if (Test-Path "$keyPath.pub") {
    Write-Host "   • Get-Content '$keyPath.pub'"
}
