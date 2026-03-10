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

### Option 1: GitHub Pages (Automated)

1. **Update `vite.config.js`**
```javascript
export default defineConfig({
  base: '/your-repo-name/', // ← Change this to your repo name
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
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/root`
   - Save

4. **Deploy manually (first time)**
```bash
npm run deploy
```

5. **Automatic Deployment** - Every push to `main` auto-deploys via GitHub Actions!

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatically configured for Vite)

### Option 3: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

## 📁 Project Structure

```
DevPortfolio/
├── public/              # Static assets
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
├── index.html
├── package.json
├── vite.config.js       # ← Update base URL here
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

### GitHub Pages shows blank page

1. Check `vite.config.js` - ensure `base` matches your repo name
2. Ensure `gh-pages` branch exists
3. Check Settings → Pages → Source is set to `gh-pages`

### Animations not working

- Check browser compatibility
- Disable browser extensions that block animations
- Check console for Framer Motion errors

### Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🤝 Contributing

This is a personal portfolio template, but feel free to:
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