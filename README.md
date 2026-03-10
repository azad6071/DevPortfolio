# 🚀 ByteForge Portfolio

<div align="center">

![ByteForge](https://img.shields.io/badge/ByteForge-Portfolio-FFD60A?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-FF0055?style=for-the-badge)

**A modern, animated developer portfolio with a black & yellow code aesthetic**

[Live Demo](#) • [Features](#-features) • [Setup](#-quick-start) • [Deploy](#-deployment)

</div>

---

## ✨ Features

- 🎨 **Black & Yellow Theme** - Code-inspired aesthetic with geometric decorators
- ⚡ **Smooth Animations** - Framer Motion powered transitions and interactions
- 📱 **Fully Responsive** - Looks great on mobile, tablet, and desktop
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Easy Customization** - Single data file to update all content
- 📦 **Zero Backend** - Pure React SPA, deployable anywhere
- 🔄 **Auto Deploy** - GitHub Actions workflow for seamless deployment
- ♿ **Accessible** - WCAG compliant with keyboard navigation support

## 🎯 Sections

1. **Hero** - Eye-catching intro with typing animation
2. **About** - Bio and quick stats
3. **Skills** - Categorized tech stack with animated badges
4. **Experience** - Timeline view of work history
5. **Projects** - Showcase your best work with live/GitHub links
6. **Connect** - Call-to-action with social links
7. **Footer** - Copyright and social media icons

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI library for building components |
| **Vite** | Fast build tool and dev server |
| **Framer Motion** | Animation library for smooth transitions |
| **React Icons** | Icon library for social media and UI |
| **CSS Variables** | Theming and consistent styling |

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/DevPortfolio.git
cd DevPortfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🎨 Customization

All content is managed through a single file for easy updates:

### Edit Portfolio Data

Open `src/data/portfolioData.js` and update:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",           // ← Change this
    title: "Full Stack Developer", // ← And this
    email: "your.email@example.com",
    // ... more fields
  },
  skills: {
    languages: ["JavaScript", "Python", ...],
    // ... add/remove skills
  },
  projects: [
    {
      title: "My Awesome Project",
      description: "...",
      techStack: ["React", "Node.js"],
      githubUrl: "https://github.com/...",
      liveUrl: "https://...",
    },
    // ... add more projects
  ],
  // ... experience, social links, etc.
}
```

### Change Colors

Edit `src/styles/globals.css`:

```css
:root {
  --color-bg: #0d0d0d;           /* Background */
  --color-accent: #FFD60A;        /* Yellow accent - change this! */
  --color-text: #e8e8e8;          /* Text color */
  /* ... more variables */
}
```

### Modify Sections

Components are in `src/components/`:
- `Hero/` - Main landing section
- `About/` - Bio and stats
- `Skills/` - Tech stack
- `Experience/` - Work timeline
- `Projects/` - Project cards
- `Connect/` - Contact CTA
- `Footer/` - Footer section

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### ⚡ Option 1: Netlify (Recommended - Easiest)

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Go to [netlify.com](https://netlify.com)**
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!** Your site is live automatically. Every push deploys instantly.

**Features:**
- ✅ Free hosting
- ✅ Auto-deploy on git push
- ✅ HTTPS by default
- ✅ Custom domain support
- ✅ Environment variables

### Option 2: Vercel

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Go to [vercel.com](https://vercel.com)**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Site is live at `your-project.vercel.app`

### Option 3: GitHub Pages

1. **Update `vite.config.js`**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // ← Match your repo name exactly!
})
```

2. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: GitHub Actions
   - Wait 2-3 minutes

4. **Site live at:** `https://yourusername.github.io/your-repo-name/`

## 📁 Project Structure

```
DevPortfolio/
├── public/              # Static assets and redirects
├── src/
│   ├── components/      # React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Connect/
│   │   └── Footer/
│   ├── data/
│   │   └── portfolioData.js   # ← Edit this to update content!
│   ├── styles/
│   │   └── globals.css        # Global styles and theme
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages auto-deploy
├── netlify.toml         # Netlify configuration
├── index.html
├── package.json
├── vite.config.js       # Vite config (base: "/")
└── README.md
```

## 🎯 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 🐛 Troubleshooting

### Netlify MIME Type Error

**Error:** `Failed to load module script: Expected a JavaScript-or-Wasm module script...`

**Solution:** Already fixed! Files include:
- ✅ `netlify.toml` - Proper build config
- ✅ `public/_redirects` - SPA routing
- ✅ `vite.config.js` with `base: "/"` for Netlify

### GitHub Pages Blank Page

1. Check `vite.config.js` - ensure `base` matches your repo name
2. Verify `gh-pages` branch exists
3. Check Settings → Pages → Source is set to `gh-pages`

### Animations Not Working

- Clear browser cache
- Check browser compatibility (Chrome, Firefox, Safari all supported)
- Disable browser extensions that block animations
- Check console for errors

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

## 🤝 Contributing

This is a personal portfolio template, feel free to:
- Fork for your own use
- Submit issues for bugs
- Suggest improvements via pull requests

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration: Developer portfolios across the web
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

---

<div align="center">

**Built with 💛 and React**

Made by [Your Name](https://github.com/yourusername)

⭐ Star this repo if you found it helpful!

</div>