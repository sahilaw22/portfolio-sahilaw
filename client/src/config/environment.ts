export const config = {
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
  
  // Contact Configuration
  enableBackendSubmission: import.meta.env.VITE_ENABLE_BACKEND_SUBMISSION === 'true',
  
  // Site Configuration
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://sahilaw22.github.io/portfolio-sahilaw',
  siteName: 'Sahil A - Portfolio',
  
  // Contact Information
  contact: {
    email: 'sahilaw22@gmail.com',
    github: 'https://github.com/sahilaw22',
    linkedin: 'https://www.linkedin.com/in/sahil-a-057a0231a'
  }
}