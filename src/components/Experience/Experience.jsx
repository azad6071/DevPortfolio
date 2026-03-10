import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import './Experience.css'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience-section section">
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
            <span className="code-bracket">{'[ '}</span>
            Experience
            <span className="code-bracket">{' ]'}</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              variants={itemVariants}
            >
              {/* Timeline Line & Dot */}
              <div className="timeline-marker">
                <motion.div
                  className="timeline-dot"
                  whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(255, 214, 10, 0.8)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                {index !== portfolioData.experience.length - 1 && (
                  <div className="timeline-line" />
                )}
              </div>

              {/* Experience Content */}
              <motion.div
                className="experience-card card"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 214, 10, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header">
                  <div className="experience-title-wrapper">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="company-icon">@</span>
                      <span className="company-name">{exp.company}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <span className="duration-icon">📅</span>
                      {exp.duration}
                    </span>
                    <span className="experience-location">
                      <span className="location-icon">📍</span>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="experience-divider" />

                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="bullet">▹</span>
                      <span className="responsibility-text">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Corner Decorations */}
                <div className="card-corner top-left" />
                <div className="card-corner top-right" />
                <div className="card-corner bottom-left" />
                <div className="card-corner bottom-right" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="experience-decorators">
          <motion.div
            className="experience-decorator decorator-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="experience-decorator decorator-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -45, 0],
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

export default Experience
