# DigimetaShop — Run & Deploy (Quick Guide)

This file supplements the main `README.md` with explicit PowerShell commands for running, building, and deploying the project.

## Run locally (PowerShell)
```powershell
cd d:\Downloads\digimetashop-nextjs
npm install
npm run dev
# open http://localhost:3000
```

## Build & run production locally
```powershell
npm run build
npm start
# open http://localhost:3000
```

## Commit & push to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## Deploy to Vercel (CLI)
```powershell
npm install -g vercel
vercel login
cd d:\Downloads\digimetashop-nextjs
vercel --prod
```

## Notes
- Don't commit `.env` files. Use Vercel Environment Variables for secrets.
- If you want me to update the main `README.md` instead of adding this file, tell me and I'll try again.
