import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import portfolioData from '../../data/portfolioData'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const featuredProjects = portfolioData.projects.filter(p => p.featured)
  const displayedProjects = filter === 'featured'
    ? featuredProjects
    : portfolioData.projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <span className="code-bracket">{'<'}</span>
            Projects
            <span className="code-bracket">{' />'}</span>
          </h2>
          <p className="section-subtitle">
            Things I've built and shipped
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({portfolioData.projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured ({featuredProjects.length})
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={filter}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 214, 10, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐</span> Featured
                </div>
              )}

              {/* Project Header */}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View GitHub repository"
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Corner Decorations */}
              <div className="card-corner top-left" />
              <div className="card-corner top-right" />
              <div className="card-corner bottom-left" />
              <div className="card-corner bottom-right" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="projects-decorators">
          <motion.div
            className="projects-decorator decorator-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="projects-decorator decorator-2"
            animate={{
              rotate: [360, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
