import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Developing modern web applications using React, TypeScript, and Node.js"
    },
    {
      title: "Frontend Developer",
      company: "Startup",
      period: "2022 - 2023",
      description: "Built responsive user interfaces and improved user experience"
    },
    {
      title: "Junior Developer",
      company: "Agency",
      period: "2021 - 2022",
      description: "Learned web development fundamentals and contributed to various projects"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary font-medium">{exp.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience