// ====================================
// 🎯 PORTFOLIO DATA CONFIGURATION
// ====================================
// Edit this file to update your portfolio content
// All sections pull data from here!

export const portfolioData = {
  // ====================================
  // PERSONAL INFO
  // ====================================
  personal: {
    name: "Azad Kumar",
    title: "Software Engineer",
    tagline: "Building the future one line at a time",
    bio: "Passionate developer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and bringing ideas to life through code.",
    email: "azadkumar1721@gmail.com",
    location: "New Delhi, India",
    resume: "/path-to-your-resume.pdf", // Optional: Add your resume link
  },

  // ====================================
  // STATS (displayed in About section)
  // ====================================
  stats: {
    yearsOfExperience: "2+",
    projectsCompleted: "25+",
    companiesWorked: "3",
  },

  // ====================================
  // SKILLS (grouped by category)
  // ====================================
  skills: {
    languages: [
      "Java",
      "JavaScript",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
    backend: [
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Node.js"
    ],
    frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Redux",
      "Material-UI",
      "High Charts",
    ],
    tools: [
      "Git",
      "BitBucket",
      "Docker",
      "AWS",
      "Postman",
      "VS Code",
    ],
  },

  // ====================================
  // EXPERIENCE
  // ====================================
  experience: [
    {
      id: 1,
      company: "HiLabs",
      role: "Software Development Engineer",
      duration: "June 2024 - Present",
      location: "Pune, Maharastra",
      responsibilities: [
        "Led development of a microservices architecture serving 100K+ daily users",
        "Optimized application performance, reducing load time by 40%",
        "Mentored 3 junior developers and conducted code reviews",
        "Enterprise Authentication: Owned end-to-end Ping Identity SSO integration across React and Spring Boot, implementing OAuth 2.0 for secure single sign-on, role-based access control, and scalable enterprise authentication",
      ],
    },
    {
      id: 2,
      company: "Samsung R&D Bangalore",
      role: "Software Development Intern",
      duration: "May 2023 - July 2023",
      location: "Remote",
      responsibilities: [
        "Analyzed NFC protocol specifications and Android integration workflows, delivering structured documentation to support the design of contactless payment features.",
        "Built a Kotlin-based Android application integrating REST APIs (NewsAPI) to deliver real-time news, gaining hands-on experience with mobile architecture and API-driven design."
      ],
    },
    {
      id: 3,
      company: "KlearVision Pvt. Ltd.",
      role: "Research Intern",
      duration: "Dec 2021 - Feb 2022",
      location: "IIT Kharagpur",
      responsibilities: [
        "Implemented CUDA-based matrix multiplication, reducing computation time by 90% for large-scale parallel operations",
        "Developed an edge detection system using OpenCV (C++) for images & video streams enabling efficient feature extraction"
      ],
    },
  ],

  // ====================================
  // PROJECTS
  // ====================================
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with real-time inventory management, payment integration, and admin dashboard. Built for scalability and performance.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3", "Redis"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with drag-and-drop interface, real-time updates, and team collaboration features. Think Trello meets Notion.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media managers to track engagement across multiple platforms. Features data visualization and automated reporting.",
      techStack: ["Vue.js", "Express", "Chart.js", "MongoDB", "Twitter API"],
      githubUrl: "https://github.com/yourusername/social-dashboard",
      liveUrl: "https://your-social-dashboard.com",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts. Clean UI with smooth animations.",
      techStack: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://your-weather-app.com",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio CMS",
      description:
        "Headless CMS for developers to manage portfolio content without touching code. Built with a focus on developer experience.",
      techStack: ["React", "Firebase", "Material-UI", "Markdown"],
      githubUrl: "https://github.com/yourusername/portfolio-cms",
      liveUrl: null, // No live demo
      featured: false,
    },
    {
      id: 6,
      title: "AI Chat Bot",
      description:
        "Intelligent chatbot powered by OpenAI GPT API. Features context-aware conversations, sentiment analysis, and custom training.",
      techStack: ["Python", "FastAPI", "OpenAI API", "React", "WebSockets"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://your-chatbot-demo.com",
      featured: false,
    },
  ],

  // ====================================
  // SOCIAL LINKS
  // ====================================
  social: {
    github: "https://github.com/azad6071",
    linkedin: "https://linkedin.com/in/azad-kumar-dakshana",
    twitter: "https://x.com/AzadKum85999627",
    // Optional: Add more social links
    // instagram: "https://instagram.com/yourusername",
    // medium: "https://medium.com/@yourusername",
    // dev: "https://dev.to/yourusername",
  },

  // ====================================
  // NAVIGATION MENU
  // ====================================
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ],
};

export default portfolioData;
