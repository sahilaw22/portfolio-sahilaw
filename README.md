# Portfolio Website - Sahil A

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern UI components, and professional design.

## 🌟 Live Demo

**GitHub Pages**: [https://sahilaw22.github.io/portfolio-sahilaw](https://sahilaw22.github.io/portfolio-sahilaw)

## 🚀 Deployment Options

This portfolio is configured for deployment on multiple platforms:

### GitHub Pages (Current)
- Automatically deploys on every push to `main` branch
- Static frontend-only deployment
- Accessible at `sahilaw22.github.io/portfolio-sahilaw`

### Vercel (Alternative)
- Full-stack deployment with backend support
- Contact form functionality with database
- Environment variables for production configuration

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite with optimized production builds
- **Deployment**: GitHub Actions + GitHub Pages

## 🎨 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with glass morphism effects
- **Smooth Animations**: Powered by Framer Motion
- **Fast Loading**: Optimized Vite build with code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Built with accessibility in mind

## 🏗️ Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/sahilaw22/portfolio-sahilaw.git
cd portfolio-sahilaw

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production (GitHub Pages)
- `npm run build:server` - Build full-stack version (Vercel)
- `npm run preview` - Preview production build locally
- `npm run check` - TypeScript type checking

## 📁 Project Structure

```
portfolio-sahilaw/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── main.tsx        # App entry point
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── dist/public/            # Built assets (GitHub Pages)
└── package.json           # Dependencies and scripts
```

## 🌐 Deployment Configuration

### GitHub Pages Setup
1. Repository configured with GitHub Actions workflow
2. Deploys from `main` branch automatically
3. Uses Vite build with proper base path (`/portfolio-sahilaw/`)
4. Static files served from `dist/public` directory

### Environment Variables
- `NODE_ENV=production` - Enables production optimizations
- Base path automatically configured for GitHub Pages subdirectory

## 📧 Contact

- **Email**: sahilaw22@gmail.com
- **GitHub**: [github.com/sahilaw22](https://github.com/sahilaw22)
- **LinkedIn**: [linkedin.com/in/sahil-a-057a0231a](https://www.linkedin.com/in/sahil-a-057a0231a)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Sahil A