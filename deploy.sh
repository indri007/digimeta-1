#!/bin/bash

echo "🚀 DigimetaShop Deployment Script"
echo "=================================="
echo ""

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update DigimetaShop website"
fi
git commit -m "$commit_msg"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Netlify will automatically build and deploy your site"
echo "📊 Check build status at: https://app.netlify.com"
echo ""
