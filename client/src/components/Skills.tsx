import React from 'react'

const Skills = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
    'PostgreSQL', 'Tailwind CSS', 'Next.js', 'Vite', 'Git',
    'HTML5', 'CSS3', 'REST APIs', 'Database Design', 'Responsive Design'
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills