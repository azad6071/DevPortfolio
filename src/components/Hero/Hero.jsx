import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import './Hero.css'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const textToType = portfolioData.personal.title

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textToType

      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
        setTypingSpeed(150)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(fullText.substring(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
        setTypingSpeed(75)
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, typingSpeed, textToType, loopNum])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToConnect = () => {
    const connectSection = document.getElementById('connect')
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        {/* Floating Geometric Decorators */}
        <div className="decorators">
          <motion.div
            className="decorator decorator-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="decorator decorator-2"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="decorator decorator-3"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="decorator decorator-4"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="greeting">
              <span className="bracket">{'{'}</span>
              <span className="greeting-text"> Hi, I'm</span>
              <span className="bracket"> {'}'}</span>
            </div>

            <h1 className="hero-name">
              {portfolioData.personal.name}
            </h1>

            <div className="hero-title">
              <span className="code-symbol">{'> '}</span>
              <span className="typed-text">{displayedText}</span>
              <span className="cursor">|</span>
            </div>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {portfolioData.personal.tagline}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-outline"
              onClick={scrollToConnect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="mouse"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="wheel"></div>
            </motion.div>
            <p>Scroll to explore</p>
          </motion.div>
        </div>

        {/* Code Block Decorative Element */}
        <motion.div
          className="code-block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="code-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="code-content">
            <pre>
              <code>
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{\n'}
                  <span className="code-property">  name</span>: <span className="code-string">"{portfolioData.personal.name}"</span>,{'\n'}
                  <span className="code-property">  skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>],{'\n'}
                  <span className="code-property">  hireable</span>: <span className="code-boolean">true</span>{'\n'}
                {'};'}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
