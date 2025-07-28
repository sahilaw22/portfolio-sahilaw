#!/data/data/com.termux/files/usr/bin/bash

# Set Git user config
git config --global user.name "sahilaw22"
git config --global user.email "sahilwan064@gmail.com"

# Move to your project folder
cd ~/portfolio-sahilaw || { echo "❌ Folder not found!"; exit 1; }

# Show changes
git status

# Stage all changes
git add .

# Commit with message
echo -n "📦 Enter commit message: "
read commitMessage
git commit -m "$commitMessage"

# Push to GitHub (manual login required)
git push origin main
