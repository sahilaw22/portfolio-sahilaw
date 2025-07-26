# Portfolio Website - Sahil A

## Overview

This is a modern, full-stack portfolio website built with React and TypeScript. The application showcases personal projects, skills, and experience through an interactive single-page application with smooth animations and modern UI components. It features a contact form that stores submissions and includes comprehensive sections for about, skills, projects, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## Personal Information
- Name: Sahil A
- Email: sahilaw22@gmail.com
- GitHub: https://github.com/sahilaw22
- LinkedIn: https://www.linkedin.com/in/sahil-a-057a0231a

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between frontend, backend, and shared components:

- **Frontend**: React SPA with TypeScript, using Vite for development and bundling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend
- **Development**: Hot module replacement and live reloading

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for contact form submission
- **Data Storage**: Currently using in-memory storage (MemStorage class) with interface for easy PostgreSQL migration
- **Middleware**: Custom logging, JSON parsing, error handling
- **Development**: Vite integration for seamless full-stack development

### Shared Components
- **Schema Definition**: Shared TypeScript types and Zod validation schemas
- **Database Schema**: Drizzle ORM schema definitions ready for PostgreSQL

## Data Flow

1. **Contact Form Submission**:
   - Frontend validates form data using Zod schemas
   - Data sent to `/api/contact` endpoint via POST request
   - Backend validates and stores contact information
   - Success/error response sent back to frontend
   - Toast notifications provide user feedback

2. **Contact Data Retrieval**:
   - Admin endpoint `/api/contacts` returns all stored contacts
   - Data sorted by creation date (newest first)

3. **Development Workflow**:
   - Vite dev server handles frontend with HMR
   - Express server handles API routes
   - Both run concurrently in development mode

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Data and Validation
- **Zod**: Schema validation for forms and API
- **React Hook Form**: Form state management
- **React Query**: Server state management and caching

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **esbuild**: Fast JavaScript bundler for production

### Database (Configured)
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` with built assets
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection

### Database Migration
- **Current**: In-memory storage for development/demo
- **Production Ready**: Drizzle migrations configured for PostgreSQL
- **Migration Command**: `npm run db:push` to sync schema changes

The application is designed for easy deployment to platforms like Vercel, Netlify, or Railway, with the database configuration ready for cloud PostgreSQL providers like Neon, Supabase, or PlanetScale.