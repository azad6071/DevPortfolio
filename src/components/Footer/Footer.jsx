import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import portfolioData from '../../data/portfolioData'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.social.github,
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: portfolioData.social.linkedin,
      icon: <FaLinkedin />,
    },
    {
      name: 'Twitter',
      url: portfolioData.social.twitter,
      icon: <FaTwitter />,
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Logo */}
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-bracket">{'<'}</span>
            ByteForge
            <span className="logo-bracket">{' />'}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="footer-copyright">
            <span className="code-symbol">{'{ '}</span>
            © {currentYear} ByteForge. Built with{' '}
            <motion.span
              className="heart-icon"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart />
            </motion.span>{' '}
            and React
            <span className="code-symbol">{' }'}</span>
          </p>
          <p className="footer-tagline">Crafted pixel by pixel</p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="footer-decorators">
          <motion.div
            className="footer-decorator decorator-1"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="footer-decorator decorator-2"
            animate={{
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
