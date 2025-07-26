# Portfolio Website - Sahil A

A modern, full-stack portfolio website built with React, TypeScript, and deployed on Vercel. Features a responsive design, contact form, and admin dashboard with authentication.

## 🚀 Live Demo

- **Portfolio**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- **Admin Dashboard**: [https://your-portfolio.vercel.app/admin](https://your-portfolio.vercel.app/admin)

## ✨ Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Contact Form**: Validated form with Zod schema validation
- **Admin Dashboard**: Secure admin panel to manage contact submissions
- **Authentication**: Secret code-based admin authentication
- **Database Ready**: Configured for PostgreSQL with Drizzle ORM
- **Serverless**: Optimized for Vercel serverless functions
- **TypeScript**: Full type safety across frontend and backend

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Wouter** for routing

### Backend
- **Vercel Serverless Functions**
- **Express.js** (for local development)
- **PostgreSQL** with Drizzle ORM
- **Zod** for API validation

### Deployment
- **Vercel** for hosting and serverless functions
- **Neon** for PostgreSQL database

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)
- Neon account (for database - optional)

## 🏃‍♂️ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/sahilaw22/portfolio-sahilaw.git
cd portfolio-sahilaw
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Optional: Database URL for production
DATABASE_URL=your_neon_database_url

# Admin secret code (change this!)
ADMIN_SECRET=YourSecretCode

# Session secret (generate a secure random string)
SESSION_SECRET=your-super-secure-session-secret
```

### 4. Run development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Deployment to Vercel

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy

```bash
vercel
```

### 4. Set Environment Variables

In your Vercel dashboard, add the following environment variables:

- `DATABASE_URL`: Your Neon PostgreSQL connection string
- `ADMIN_SECRET`: Your admin secret code
- `SESSION_SECRET`: A secure random string for sessions
- `NODE_ENV`: `production`

### 5. Database Setup (Optional)

If using a database, push the schema:

```bash
npm run db:push
```

## 🔧 Project Structure

```
portfolio-sahilaw/
├── api/                    # Vercel serverless functions
│   ├── admin/
│   │   ├── contacts.ts
│   │   ├── login.ts
│   │   ├── logout.ts
│   │   └── contacts/
│   │       └── [id].ts
│   ├── contact.ts
│   └── storage.ts
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── hooks/
│   └── index.html
├── server/                 # Express.js server (for local dev)
│   ├── routes/
│   └── index.ts
├── shared/                 # Shared types and schemas
│   ├── types/
│   └── schema.ts
├── vercel.json            # Vercel configuration
└── package.json
```

## 🔐 Admin Access

1. Navigate to `/admin`
2. Enter the secret code (default: `IamNerd`)
3. Access the dashboard at `/admin/dashboard`

**Security Note**: Change the `ADMIN_SECRET` environment variable before deploying to production!

## 🗃️ Database Configuration

### Development
The application uses in-memory storage for development and demo purposes.

### Production with Neon
1. Create a [Neon](https://neon.tech) account
2. Create a new project and database
3. Copy the connection string
4. Add `DATABASE_URL` to your Vercel environment variables
5. Run `npm run db:push` to create tables

## 🎨 Customization

### Personal Information
Update the personal information in `client/src/pages/Home.tsx`:

```typescript
// Update contact information
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile"
}
```

### Styling
- Colors and themes: `client/src/index.css`
- Component styles: `tailwind.config.ts`
- UI components: `client/src/components/ui/`

### Content
- Hero section: `client/src/pages/Home.tsx`
- About section: Update the about text in the Home component
- Projects: Replace placeholder projects with your actual projects

## 🧪 Local Development

### Frontend only
```bash
cd client && npm run dev
```

### Full-stack (with Express server)
```bash
npm run dev
```

### Build and test production
```bash
npm run build
npm run start
```

## 📝 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin authentication
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/contacts` - Get all contacts (admin only)
- `DELETE /api/admin/contacts/[id]` - Delete contact (admin only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help with deployment, feel free to:

- Open an issue on GitHub
- Contact me at [sahilaw22@gmail.com](mailto:sahilaw22@gmail.com)
- Connect on [LinkedIn](https://www.linkedin.com/in/sahil-a-057a0231a)

---

Built with ❤️ by [Sahil A](https://github.com/sahilaw22)