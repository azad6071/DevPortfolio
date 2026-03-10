# 🚀 ByteForge Portfolio - Setup Guide

Welcome to your new developer portfolio! This guide will help you set up, customize, and deploy your site in minutes.

## 📋 Prerequisites

Before you begin, make sure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- A **GitHub account** - [Sign up here](https://github.com/)

## ⚡ Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/DevPortfolio/` in your browser. You should see your portfolio running!

### Step 3: Customize Your Content

Edit `src/data/portfolioData.js` with your information:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name Here",              // ← Change this
    title: "Your Job Title",             // ← Change this
    email: "your.email@example.com",     // ← Change this
    location: "Your City, Country",
    bio: "Your bio here..."
  },
  // ... continue editing
}
```

**Save the file** and watch the changes appear instantly! ✨

## 🎨 Customization Guide

### Update Personal Info

In `src/data/portfolioData.js`:

1. **Name & Title**: Lines 12-13
2. **Bio**: Line 15
3. **Email & Location**: Lines 16-17

### Add Your Skills

```javascript
skills: {
  languages: ["JavaScript", "Python", "Go"],  // Add/remove skills
  frontend: ["React", "Vue", "Svelte"],
  backend: ["Node.js", "Django", "FastAPI"],
  tools: ["Git", "Docker", "AWS"]
}
```

### Add Work Experience

```javascript
experience: [
  {
    id: 1,
    company: "Your Company Name",
    role: "Your Position",
    duration: "Jan 2023 - Present",
    location: "City, Country",
    responsibilities: [
      "What you did...",
      "Your achievements...",
      "Key projects..."
    ]
  }
]
```

### Add Projects

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "What it does...",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://project.com",
    featured: true  // Shows in "Featured" filter
  }
]
```

### Update Social Links

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
}
```

### Change Theme Colors

Edit `src/styles/globals.css`:

```css
:root {
  --color-bg: #0d0d0d;        /* Background color */
  --color-accent: #FFD60A;     /* Yellow accent - change to any color! */
  --color-text: #e8e8e8;       /* Text color */
}
```

**Popular color schemes:**
- 🟢 Green: `#00FF41` (Matrix style)
- 🔵 Blue: `#00D9FF` (Cyberpunk)
- 🟣 Purple: `#B794F4` (Modern)
- 🔴 Red: `#FF6B6B` (Bold)

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic (Recommended)

#### 1. Update Repository Name

Edit `vite.config.js` (line 7):

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // ← Change 'DevPortfolio' to your actual repo name
})
```

**Important:** The `base` must match your GitHub repository name exactly!

#### 2. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: ByteForge Portfolio"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Click **Save**

#### 4. Trigger Deployment

The GitHub Action will automatically run when you push. Or manually trigger it:

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

#### 5. Access Your Site

After 2-3 minutes, your site will be live at:
```
https://yourusername.github.io/your-repo-name/
```

### Method 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

Then enable GitHub Pages in Settings → Pages → Source: `gh-pages` branch.

## 🔧 Troubleshooting

### Issue: Blank page after deployment

**Solution 1:** Check `vite.config.js` base path
```javascript
base: '/exact-repo-name/'  // Must match your repo name!
```

**Solution 2:** Verify GitHub Pages settings
- Go to Settings → Pages
- Ensure Source is set correctly

### Issue: Images or assets not loading

Check if your paths start with `/` - they should be relative:
```javascript
// ❌ Wrong
import logo from '/assets/logo.png'

// ✅ Correct  
import logo from './assets/logo.png'
```

### Issue: CSS not applying

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Port already in use

```bash
# Kill the process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

## 📝 Important Configuration Files

| File | Purpose | What to Edit |
|------|---------|--------------|
| `src/data/portfolioData.js` | **All your content** | Name, projects, skills, etc. |
| `vite.config.js` | Build config | `base` URL for deployment |
| `src/styles/globals.css` | Theme colors | Color variables |
| `.github/workflows/deploy.yml` | Auto-deploy setup | Usually no changes needed |

## 🎯 Next Steps

1. ✅ Replace all placeholder content in `portfolioData.js`
2. ✅ Add your real projects with GitHub/live links
3. ✅ Update social media links
4. ✅ Customize colors if desired
5. ✅ Test locally with `npm run dev`
6. ✅ Deploy to GitHub Pages
7. ✅ Share your portfolio! 🎉

## 💡 Pro Tips

### Update Content Regularly
```bash
# Make changes to portfolioData.js
git add .
git commit -m "Update projects"
git push
# Site auto-deploys in ~2 minutes!
```

### Add Custom Domain

1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add `CNAME` file to `public/` with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS with your domain provider:
   - Type: `A` Record
   - Host: `@`
   - Value: GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

### Performance Tips

- Optimize images before adding (use tools like [TinyPNG](https://tinypng.com/))
- Keep project count reasonable (6-12 projects)
- Use external links for large assets

## 🆘 Need Help?

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Check the main README.md
- **React Docs**: [reactjs.org](https://reactjs.org/)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Guide](https://pages.github.com/)
- [React Best Practices](https://react.dev/)

---

**Ready to go live?** Follow the deployment steps above and share your portfolio with the world! 🚀

Good luck! 🎉