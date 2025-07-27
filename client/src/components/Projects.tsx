import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/sahilaw22/portfolio-sahilaw"
    },
    {
      title: "Full Stack Application",
      description: "A complete web application with authentication and database integration",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      link: "#"
    },
    {
      title: "API Development",
      description: "RESTful API with comprehensive documentation and testing",
      tech: ["Node.js", "Express", "MongoDB", "Jest"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects