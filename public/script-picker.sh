#!/bin/sh -e

GITHUB_USER="harshv5094"
GITHUB_REPO="dotfiles"
FOLDER_DIR=".local/bin"

REQUIRED_PKGS="curl jq fzf bat"

# Detect escalation tool
detect_escalation() {
  if command -v sudo >/dev/null 2>&1; then
    echo "sudo"
  elif command -v doas >/dev/null 2>&1; then
    echo "doas"
  else
    echo ""
  fi
}

ESCALATE=$(detect_escalation)

# Detect package manager
detect_pkg_manager() {
  if command -v apt >/dev/null 2>&1; then
    echo "apt"
  elif command -v dnf >/dev/null 2>&1; then
    echo "dnf"
  elif command -v pacman >/dev/null 2>&1; then
    echo "pacman"
  elif command -v zypper >/dev/null 2>&1; then
    echo "zypper"
  elif command -v brew >/dev/null 2>&1; then
    echo "brew"
  else
    echo "unknown"
  fi
}

# Install missing packages
install_missing() {
  pkg_manager=$(detect_pkg_manager)

  missing_pkgs=""
  for pkg in $REQUIRED_PKGS; do
    if ! command -v "$pkg" >/dev/null 2>&1; then
      # Debian/Ubuntu names "bat" as "batcat"
      if [ "$pkg" = "bat" ] && command -v batcat >/dev/null 2>&1; then
        continue
      fi
      missing_pkgs="$missing_pkgs $pkg"
    fi
  done

  [ -z "$missing_pkgs" ] && return 0

  if [ "$pkg_manager" != "brew" ] && [ -z "$ESCALATE" ]; then
    echo "No sudo/doas found. Please install manually: $missing_pkgs"
    return 1
  fi

  echo "Installing missing packages: $missing_pkgs"
  case $pkg_manager in
  apt)
    $ESCALATE apt update && $ESCALATE apt install -y $missing_pkgs
    ;;
  dnf)
    $ESCALATE dnf install -y $missing_pkgs
    ;;
  pacman)
    $ESCALATE pacman -Sy --noconfirm $missing_pkgs
    ;;
  zypper)
    $ESCALATE zypper install -y $missing_pkgs
    ;;
  brew)
    brew install $missing_pkgs
    ;;
  *)
    echo "Unsupported package manager. Please install manually: $missing_pkgs"
    ;;
  esac
}

install_missing

# Fetch list of scripts (cached for performance)
scripts=$(curl -fsSL "https://api.github.com/repos/$GITHUB_USER/$GITHUB_REPO/contents/$FOLDER_DIR" |
  jq -r '.[].name' | grep '\.sh$')

if [ -z "$scripts" ]; then
  echo "No scripts found in $GITHUB_USER/$GITHUB_REPO/$FOLDER_DIR"
  exit 1
fi

# Use fzf to pick a script
selected=$(printf '%s\n' $scripts | fzf \
  --style full --layout=reverse \
  --border --padding 1,2 \
  --border-label '** Script Picker **' \
  --preview "curl -fsSL https://raw.githubusercontent.com/$GITHUB_USER/$GITHUB_REPO/main/$FOLDER_DIR/{} | bat --style=plain --color=always || curl -fsSL https://raw.githubusercontent.com/$GITHUB_USER/$GITHUB_REPO/main/$FOLDER_DIR/{} | cat" \
  --preview-window=right:60%:wrap \
  --color "bg:#282828,fg:#ebdbb2,hl:#fabd2f" \
  --color "border:#fabd2f,label:#fabd2f" \
  --color "preview-border:#d79921,preview-label:#fabd2f" \
  --ansi)

# Exit if nothing was selected
[ -z "$selected" ] && exit 0

# Execute the chosen script
curl -fsSL "https://raw.githubusercontent.com/$GITHUB_USER/$GITHUB_REPO/main/$FOLDER_DIR/$selected" | sh
