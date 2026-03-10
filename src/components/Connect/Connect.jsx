import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import portfolioData from '../../data/portfolioData'
import './Connect.css'

const Connect = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.social.github,
      icon: <FaGithub />,
      color: '#FFD60A',
    },
    {
      name: 'LinkedIn',
      url: portfolioData.social.linkedin,
      icon: <FaLinkedin />,
      color: '#FFD60A',
    },
    {
      name: 'Twitter',
      url: portfolioData.social.twitter,
      icon: <FaTwitter />,
      color: '#FFD60A',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}`
  }

  return (
    <section id="connect" className="connect-section section">
      <div className="container">
        {/* Decorative Background Elements */}
        <div className="connect-decorators">
          <motion.div
            className="connect-decorator decorator-1"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="connect-decorator decorator-2"
            animate={{
              rotate: [360, 180, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="connect-decorator decorator-3"
            animate={{
              rotate: [0, -90, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <motion.div
          className="connect-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.div
            className="connect-header"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="connect-title">
              <span className="code-bracket">{'{'}</span>
              <span className="title-text">Let's Connect</span>
              <span className="code-bracket">{'}'}</span>
            </h2>
            <p className="connect-subtitle">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            className="connect-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.button
              className="email-button btn btn-primary"
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="email-icon" />
              <span>Get In Touch</span>
            </motion.button>

            <div className="email-display">
              <span className="code-comment">// or email me directly at:</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="email-link">
                {portfolioData.personal.email}
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="social-links"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="social-label">Find me on:</p>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: '0 0 25px rgba(255, 214, 10, 0.6)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Code Block Decoration */}
          <motion.div
            className="connect-code-block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="code-window-header">
                <span className="code-dot dot-red"></span>
                <span className="code-dot dot-yellow"></span>
                <span className="code-dot dot-green"></span>
              </div>
              <div className="code-window-content">
                <pre>
                  <code>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">contact</span> = {'{\n'}
                    <span className="code-property">  email</span>:{' '}
                    <span className="code-string">"{portfolioData.personal.email}"</span>,{'\n'}
                    <span className="code-property">  status</span>:{' '}
                    <span className="code-string">"available"</span>,{'\n'}
                    <span className="code-property">  response_time</span>:{' '}
                    <span className="code-string">"within 24h"</span>{'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Connect
