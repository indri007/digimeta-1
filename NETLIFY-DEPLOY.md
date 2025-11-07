# 🚀 Deploy DigimetaShop to Netlify

Complete guide to deploy your Next.js website to Netlify.

## Prerequisites

- GitHub account
- Netlify account (free tier is fine)
- Git installed on your computer

## Step 1: Push to GitHub

### Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - DigimetaShop website"
```

### Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `digimetashop-nextjs`
4. Don't initialize with README (we already have one)
5. Click "Create Repository"

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/digimetashop-nextjs.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up or log in

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub

3. **Select Repository**
   - Find and select `digimetashop-nextjs`

4. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18
   
   These should be auto-detected from `netlify.toml`

5. **Deploy**
   - Click "Deploy site"
   - Wait 2-3 minutes for build to complete

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: digimetashop (or your preferred name)
# - Build command: npm run build
# - Publish directory: .next

# Deploy
netlify deploy --prod
```

## Step 3: Configure Custom Domain (Optional)

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `digimetashop.com` (or your domain)

2. **Update DNS**
   - Add Netlify's nameservers to your domain registrar
   - Or add A/CNAME records as instructed

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Wait a few minutes for activation

## Step 4: Update Configuration

After deployment, update these files with your actual domain:

### Update `next-seo.config.js`
```js
canonical: 'https://your-site.netlify.app/',
openGraph: {
  url: 'https://your-site.netlify.app/',
  // ...
}
```

### Update `public/sitemap.xml`
Replace all instances of:
```
https://www.digimetashop.com/
```
with:
```
https://your-site.netlify.app/
```

### Update `public/robots.txt`
```
Sitemap: https://your-site.netlify.app/sitemap.xml
```

## Step 5: Environment Variables (if needed)

If you add any API keys or secrets:

1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- ✅ Deploy on every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run build checks before deploying

## Build Settings Summary

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### 404 Errors
- Check `netlify.toml` redirects configuration
- Ensure `.next` directory is being published

### Images Not Loading
- Verify images are in `public/` folder
- Check image paths (should start with `/`)
- Enable Next.js Image Optimization in Netlify

### Slow Build Times
- Enable Netlify Build Plugins
- Use Next.js caching
- Optimize dependencies

## Performance Tips

1. **Enable Netlify Analytics**
   - Site settings → Analytics
   - Monitor traffic and performance

2. **Enable Asset Optimization**
   - Site settings → Build & deploy → Post processing
   - Enable CSS, JS, and image optimization

3. **Configure Caching**
   - Already configured in `netlify.toml`
   - Netlify CDN handles caching automatically

## Monitoring

After deployment, monitor:
- Build logs: Check for warnings
- Site speed: Use Lighthouse
- Analytics: Track visitors
- Error logs: Check for runtime errors

## Useful Commands

```bash
# Check deployment status
netlify status

# View site in browser
netlify open

# View build logs
netlify logs

# Deploy preview
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Support

- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Next.js on Netlify: [docs.netlify.com/frameworks/next-js](https://docs.netlify.com/frameworks/next-js)
- Community: [answers.netlify.com](https://answers.netlify.com)

## Your Site URLs

After deployment, you'll get:
- **Netlify URL**: `https://your-site.netlify.app`
- **Custom Domain**: `https://digimetashop.com` (if configured)

---

**🎉 Congratulations! Your DigimetaShop is now live!**

Share your site:
- WhatsApp: Share the link with customers
- Social Media: Promote your new online store
- Google: Submit sitemap for indexing
