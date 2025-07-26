// Environment configuration for static deployment
export const config = {
  // Static deployment - no backend available
  isStatic: true,
  
  // GitHub Pages base URL
  baseUrl: import.meta.env.DEV 
    ? '' 
    : 'https://sahilaw22.github.io/portfolio-sahilaw',
    
  // Contact form configuration
  contact: {
    // For static deployment, we'll use mailto or a form service
    enableContactForm: false,
    fallbackEmail: 'sahilaw22@gmail.com',
  },
  
  // API configuration
  api: {
    // No backend API available in static deployment
    baseUrl: null,
    enabled: false,
  }
}

// Graceful API error handling for static deployment
export const handleApiError = (error: any) => {
  console.warn('API call failed in static deployment:', error)
  return {
    error: 'Feature not available in static deployment',
    fallback: true
  }
}

// Mock API functions for static deployment
export const mockApi = {
  // Mock contact form submission
  submitContact: async (data: any) => {
    console.log('Contact form data (static deployment):', data)
    // In a real static deployment, this could integrate with:
    // - Netlify Forms
    // - Formspree
    // - EmailJS
    // - Or just use mailto
    return {
      success: true,
      message: 'Thank you for your message! Please email directly at sahilaw22@gmail.com'
    }
  }
}