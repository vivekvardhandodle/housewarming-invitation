#!/bin/bash

echo "🚀 GitHub & Vercel Deployment Helper"
echo "===================================="
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " username

if [ -z "$username" ]; then
    echo "❌ Username cannot be empty!"
    exit 1
fi

echo ""
echo "📋 Repository name will be: housewarming-invitation"
echo ""
echo "⚠️  IMPORTANT: First, create the repository on GitHub:"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: housewarming-invitation"
echo "   3. Make it Public"
echo "   4. DON'T initialize with anything"
echo "   5. Click 'Create repository'"
echo ""
read -p "Have you created the repository? (yes/no): " created

if [ "$created" != "yes" ]; then
    echo "Please create the repository first, then run this script again."
    exit 1
fi

echo ""
echo "🔄 Setting up remote..."
git remote add origin https://github.com/$username/housewarming-invitation.git

echo "🌿 Renaming branch to main..."
git branch -M main

echo "⬆️  Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Your repository: https://github.com/$username/housewarming-invitation"
    echo ""
    echo "🚀 Next step: Deploy to Vercel"
    echo "   1. Go to: https://vercel.com"
    echo "   2. Sign in with GitHub"
    echo "   3. Import your housewarming-invitation repository"
    echo "   4. Click Deploy"
    echo "   5. Your site will be live in 2 minutes!"
    echo ""
    echo "🎉 Almost done!"
else
    echo ""
    echo "❌ Failed to push. Possible issues:"
    echo "   - Repository doesn't exist"
    echo "   - Username is wrong"
    echo "   - Not logged into GitHub"
    echo "   - Internet connection issue"
    echo ""
    echo "Try running: git remote remove origin"
    echo "Then run this script again."
fi
