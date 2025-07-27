import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container text-center">
        <p className="text-muted-foreground">
          © 2024 Sahil A. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="https://github.com/sahilaw22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sahil-a-057a0231a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:sahilaw22@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer