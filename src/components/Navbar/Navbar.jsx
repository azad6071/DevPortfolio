import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'connect']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)

    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container container">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, '#hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-bracket">{'<'}</span>
          ByteForge
          <span className="logo-bracket">{' />'}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu desktop-menu">
          {portfolioData.navLinks.map((link, index) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            )
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="navbar-menu">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
