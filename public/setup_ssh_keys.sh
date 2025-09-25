#!/bin/sh

# Usage:
#   sh setup_ssh_keys.sh <hostname> your_email@example.com
#   If no hostname is given, both email and host must be passed explicitly.

HOSTNAME="$1"
EMAIL="$2"

# Shift args if only email is passed (for backward compatibility)
if [ -z "$EMAIL" ]; then
  EMAIL="$HOSTNAME"
  HOSTNAME=""
fi

# Validate
if [ -z "$EMAIL" ] || [ -z "$HOSTNAME" ]; then
  printf "%s\n" "❌ Usage: sh setup_ssh_keys.sh <hostname> your_email@example.com"
  exit 1
fi

# Normalize hostname (remove dots for filename)
KEY_NAME="id_$(printf "%s" "$HOSTNAME" | tr '.' '_')"

# Setup paths
SSH_DIR="$HOME/.ssh"
CONFIG_FILE="$SSH_DIR/config"

mkdir -p "$SSH_DIR"
chmod 700 "$SSH_DIR"
cd "$SSH_DIR" || exit 1

# --- Key Generation ---
if [ ! -f "$KEY_NAME" ]; then
  printf "%s\n" "🔑 Generating SSH key for $HOSTNAME..."
  ssh-keygen -t ed25519 -f "$KEY_NAME" -C "$EMAIL" -N ""
else
  printf "⚠️  Key already exists at %s/%s — skipping.\n" "$SSH_DIR" "$KEY_NAME"
fi

# --- SSH Config Updates ---
touch "$CONFIG_FILE"
chmod 600 "$CONFIG_FILE"

if ! grep -q "Host $HOSTNAME" "$CONFIG_FILE"; then
  printf "%s\n" "🔧 Adding SSH config for $HOSTNAME..."
  {
    printf "%s\n" "Host $HOSTNAME"
    printf "  HostName %s\n" "$HOSTNAME"
    printf "%s\n" "  User git"
    printf "  IdentityFile %s/%s\n" "$SSH_DIR" "$KEY_NAME"
    printf "%s\n" "  IdentitiesOnly yes"
    printf "\n"
  } >>"$CONFIG_FILE"
fi

# --- Summary ---
printf "\n✅ SSH setup complete for %s.\n" "$HOSTNAME"
printf "📎 To copy your public key, run:\n"
[ -f "$KEY_NAME.pub" ] && printf "   • cat %s/%s.pub\n" "$SSH_DIR" "$KEY_NAME"
