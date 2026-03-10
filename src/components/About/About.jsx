import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const stats = [
    {
      label: 'Years Experience',
      value: portfolioData.stats.yearsOfExperience,
      icon: '⚡'
    },
    {
      label: 'Projects Completed',
      value: portfolioData.stats.projectsCompleted,
      icon: '🚀'
    },
    {
      label: 'Companies',
      value: portfolioData.stats.companiesWorked,
      icon: '💼'
    }
  ]

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>
            <span className="code-bracket">{'{ '}</span>
            About Me
            <span className="code-bracket">{' }'}</span>
          </h2>
        </motion.div>

        <div className="about-content">
          {/* Bio Section */}
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bio-card card">
              <div className="bio-header">
                <span className="code-comment">// Who am I?</span>
              </div>
              <p className="bio-text">{portfolioData.personal.bio}</p>

              <div className="bio-details">
                <div className="detail-item">
                  <span className="detail-label">📍 Location:</span>
                  <span className="detail-value">{portfolioData.personal.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">✉️ Email:</span>
                  <span className="detail-value">{portfolioData.personal.email}</span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="about-decorator decorator-square"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 214, 10, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>

                {/* Corner accent */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent bottom-right"></div>
              </motion.div>
            ))}

            {/* Decorative Element */}
            <motion.div
              className="about-decorator decorator-rectangle"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
