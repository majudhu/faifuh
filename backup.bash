#!/bin/bash

files=(
    "backup.bash"
    ".ssh"
    ".bashrc"
    ".bash_history"
    ".gitconfig"
    )

date=$(date "+%Y-%m-%d")
bakfile="ubuntu-backup-$date.tar.xz"
bakdir="/mnt/d/Majudhu/Google Drive/dev/arcv/homebak/"


[[ -f "$bakdir$bakfile" ]] && rm "$bakdir$bakfile"

tar -cJf "$bakdir$bakfile" ${files[@]}

echo "files:  ${files[@]}"
echo "backup: $bakdir$bakfile"
