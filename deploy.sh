#!/bin/bash

echo "📦 Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."

# Ensure clean temp deploy folder
rm -rf gh-pages-temp
git worktree add gh-pages-temp

cd gh-pages-temp
git checkout --orphan gh-pages
git reset --hard

cp -r ../dist/* ./
git add .
git commit -m "Manual deploy"
git push origin gh-pages --force
cd ..
git worktree remove gh-pages-temp

echo "✅ Deployed successfully!"