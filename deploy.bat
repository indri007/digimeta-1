@echo off
echo.
echo ========================================
echo   DigimetaShop Deployment Script
echo ========================================
echo.

REM Add all changes
echo Adding all changes...
git add .

REM Commit changes
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update DigimetaShop website
git commit -m "%commit_msg%"

REM Push to GitHub
echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Netlify will automatically build and deploy your site
echo Check build status at: https://app.netlify.com
echo.
pause
