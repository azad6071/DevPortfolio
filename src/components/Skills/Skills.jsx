import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import './Skills.css'

const Skills = () => {
  const { skills } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: '💻' },
    { title: 'Frontend', items: skills.frontend, icon: '🎨' },
    { title: 'Backend', items: skills.backend, icon: '⚙️' },
    { title: 'Tools & Others', items: skills.tools, icon: '🛠️' },
  ]

  return (
    <section id="skills" className="skills-section section">
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
            Skills
            <span className="code-bracket">{' />'}</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
                <span className="category-count">{category.items.length}</span>
              </div>

              <motion.div
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(255, 214, 10, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="skills-decorators">
          <motion.div
            className="skill-decorator skill-decorator-1"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="skill-decorator skill-decorator-2"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
