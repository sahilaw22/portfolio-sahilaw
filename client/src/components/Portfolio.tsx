import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Portfolio = () => {
  const personalInfo = {
    name: "Sahil A",
    email: "sahilaw22@gmail.com",
    github: "https://github.com/sahilaw22",
    linkedin: "https://www.linkedin.com/in/sahil-a-057a0231a"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.header
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Sahil A
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Full Stack Developer & Portfolio Creator
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <Mail size={32} />
            </a>
          </motion.div>
        </motion.header>

        {/* About Section */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              I'm a passionate full-stack developer who loves creating modern, interactive web applications. 
              This portfolio showcases my skills in React, TypeScript, Node.js, and modern web technologies. 
              I enjoy building user-friendly interfaces and robust backend systems.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vite', 'Git'].map((skill) => (
                <div
                  key={skill}
                  className="bg-purple-600/20 backdrop-blur rounded-lg p-3 text-center text-white font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Featured Project</h2>
            <div className="bg-purple-600/20 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">
                A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. 
                Features smooth animations, responsive design, and deployment to GitHub Pages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-700/30 text-purple-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h2>
            <p className="text-gray-300 text-center mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="text-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center mt-16 text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; 2024 Sahil A. Built with React and deployed on GitHub Pages.</p>
        </motion.footer>
      </motion.div>
    </div>
  )
}

export default Portfolio