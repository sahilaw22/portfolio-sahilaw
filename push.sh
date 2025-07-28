#!/data/data/com.termux/files/usr/bin/bash

# Git global config
git config --global user.name "sahilaw22"
git config --global user.email "sahilwan064@gmail.com"

# Navigate to your repo
cd ~/portfolio-sahilaw || { echo "❌ Project folder not found!"; exit 1; }

# Show file changes
git status

# Stage everything
git add .

# Get commit message
echo -n "📦 Enter commit message: "
read commitMessage

# Commit and push
git commit -m "$commitMessage"
git push origin main
