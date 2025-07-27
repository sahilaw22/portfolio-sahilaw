# Portfolio Website - Sahil A

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing personal projects, skills, and experience.

## 🚀 Live Demo

- **GitHub Pages**: [https://sahilaw22.github.io/portfolio-sahilaw](https://sahilaw22.github.io/portfolio-sahilaw)
- **Vercel**: [Coming Soon](https://portfolio-sahilaw.vercel.app)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Fast**: Built with Vite for optimal performance
- **Accessible**: Following web accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages + GitHub Actions
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready for future enhancements)

## 🏗️ Project Structure

```
portfolio-sahilaw/
├── .github/workflows/     # GitHub Actions for CI/CD
│   └── deploy.yml        # GitHub Pages deployment workflow
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── lib/          # Utility functions
│   │   ├── App.tsx       # Main app component
│   │   ├── main.tsx      # App entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── dist/public/          # Build output for GitHub Pages
└── package.json          # Dependencies and scripts
```

## 🚀 Deployment Options

### GitHub Pages (Current Setup)

The portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to `main` branch triggers deployment
2. **Build Process**: Runs `npm run build:gh-pages` with production optimizations
3. **Base URL**: Configured for subdirectory hosting at `/portfolio-sahilaw/`
4. **Live URL**: https://sahilaw22.github.io/portfolio-sahilaw

**GitHub Actions Workflow:**
- Builds the project with proper base URL for GitHub Pages
- Runs TypeScript checks
- Uploads artifacts to GitHub Pages
- Deploys to `gh-pages` environment

### Vercel (Alternative Option)

For full-stack deployment with backend features:

1. Connect repository to Vercel
2. Use default build settings (detects Vite automatically)
3. Environment variables for database (if needed)
4. Automatic deployments on push

## 🏃‍♂️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahilaw22/portfolio-sahilaw.git
   cd portfolio-sahilaw
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

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build:gh-pages` - Build for GitHub Pages deployment
- `npm run build` - Build full-stack application
- `npm run check` - Run TypeScript type checking
- `npm run start` - Start production server (full-stack)

## 🎨 Customization

### Styling
- Built with Tailwind CSS using utility classes
- Custom color scheme defined in `client/src/index.css`
- Responsive design with mobile-first approach

### Content
- Update personal information in components:
  - `Hero.tsx` - Main introduction and call-to-action
  - `About.tsx` - About section content
  - `Skills.tsx` - Technical skills list
  - `Projects.tsx` - Portfolio projects
  - `Experience.tsx` - Work experience
  - `Contact.tsx` - Contact information and form

### Contact Form
- Currently configured for static deployment (GitHub Pages)
- Shows informational message and directs to email
- Can be connected to backend service for full functionality

## 🔧 GitHub Pages Configuration

The repository is configured for GitHub Pages deployment:

1. **Base URL**: Set to `/portfolio-sahilaw/` for subdirectory hosting
2. **Build Output**: Static files in `dist/public/` directory
3. **Workflow**: `.github/workflows/deploy.yml` handles automated deployment
4. **Permissions**: GitHub Actions has required permissions for Pages deployment

## 📱 Mobile Optimization

- Responsive design adapts to all screen sizes
- Touch-friendly navigation and interactions
- Optimized images and assets for fast loading
- Progressive enhancement for older browsers

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [sahilaw22@gmail.com](mailto:sahilaw22@gmail.com)
- **GitHub**: [sahilaw22](https://github.com/sahilaw22)
- **LinkedIn**: [sahil-a-057a0231a](https://www.linkedin.com/in/sahil-a-057a0231a)

---

Built with ❤️ by Sahil A