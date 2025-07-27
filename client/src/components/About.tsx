import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            I'm a passionate full-stack developer with experience in modern web technologies. 
            I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or learning about the latest trends in web development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About