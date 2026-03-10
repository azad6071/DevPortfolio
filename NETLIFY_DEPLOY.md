# 🚀 Netlify Deployment Guide - ByteForge Portfolio

Deploy your portfolio to Netlify in **5 minutes**! This is the easiest way to go live.

## ⚡ Quick Start (5 Steps)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "ByteForge Portfolio - Ready for Netlify"
git push origin main
```

### Step 2: Go to Netlify

Visit [netlify.com](https://netlify.com) and click **"New site from Git"**

### Step 3: Connect GitHub

1. Click **GitHub**
2. Authorize Netlify to access your repositories
3. Select your `DevPortfolio` repository

### Step 4: Configure Build Settings

Netlify should auto-detect these settings, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (or higher)

Then click **"Deploy site"**

### Step 5: Done! 🎉

Your site will be live in 1-2 minutes at a URL like:
```
https://your-random-name.netlify.app
```

Every time you push to GitHub, Netlify automatically redeploys!

---

## 📝 Custom Domain (Optional)

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Netlify: **Site settings** → **Domain management**
3. Click **Add custom domain**
4. Enter your domain name
5. Update DNS at your domain registrar (follow Netlify's instructions)

---

## 🔧 What's Already Configured

Your project includes:

✅ **netlify.toml** - Build and redirect configuration
✅ **public/_redirects** - SPA routing setup
✅ **vite.config.js** - Correct base path for Netlify (`base: "/"`)

**No additional setup needed!**

---

## 🐛 Troubleshooting

### Build Fails on Netlify

If the build fails:

1. Go to **Deploys** → Click latest deploy
2. Check **Build log** for errors
3. Common fixes:
   ```bash
   # Local rebuild test
   rm -rf node_modules dist
   npm install
   npm run build
   ```

### Site Shows Blank Page

1. Check browser console (F12 → Console tab)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check that files are in `dist/` folder:
   ```bash
   npm run build
   ls -la dist/
   ```

### Environment Variables

If you add environment variables:

1. In Netlify: **Site settings** → **Build & deploy** → **Environment**
2. Add your variables
3. Redeploy the site

---

## 📚 Useful Netlify Features

### Preview Deploys

Every pull request gets an automatic preview deployment!

```bash
# Make changes in a new branch
git checkout -b new-feature
# ... make changes ...
git push origin new-feature

# Push PR to GitHub → Netlify auto-deploys preview URL
```

### Rollback to Previous Deploy

1. Go to **Deploys**
2. Find the deployment you want
3. Click **Publish deploy**

### Check Build Logs

1. Go to **Deploys** tab
2. Click a deployment
3. See full build logs and any errors

---

## 🚀 Continuous Updates

After deployment, updating your portfolio is super easy:

```bash
# Make changes to portfolioData.js
nano src/data/portfolioData.js

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# Netlify automatically rebuilds and deploys! ✨
```

---

## 💡 Pro Tips

### Custom Build Scripts

Edit `netlify.toml` to customize:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Analytics

Netlify offers built-in analytics:

1. **Site settings** → **Analytics**
2. Enable analytics to track visitors

### Forms (Advanced)

Netlify can handle contact forms:

1. Add to your form: `netlify` attribute
2. In Netlify: **Forms** tab to see submissions

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Updated `src/data/portfolioData.js` with your info
- [ ] Changed theme colors in `src/styles/globals.css` (optional)
- [ ] Tested locally: `npm run dev`
- [ ] Builds successfully: `npm run build`
- [ ] Code pushed to GitHub

---

## 🎯 Next Steps

1. ✅ Deploy to Netlify (this guide)
2. Share your portfolio URL
3. Add custom domain (optional)
4. Keep updating your projects!

---

**Need Help?**

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)

**Happy deploying!** 🚀