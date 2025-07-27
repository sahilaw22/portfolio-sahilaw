import React from 'react'

const Hero = () => {
  return (
    <section className="container min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Hi, I'm <span className="text-primary">Sahil A</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Full Stack Developer passionate about creating amazing web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero