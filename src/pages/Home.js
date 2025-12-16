import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import DemoModal from "../DemoModal";

AOS.init({
  duration: 1000,
  once: true,
});

const Home = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Particle animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence platform with machine learning predictions and data visualization.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      description: "Enterprise cloud infrastructure migration with zero downtime and automated scaling.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Firebase", "Node.js", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "IoT Smart Home System",
      description: "Integrated IoT platform for smart home automation with voice control and energy optimization.",
      technologies: ["IoT", "MQTT", "React", "Python", "Raspberry Pi"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain management system using blockchain technology for traceability.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  // Sample demos data
  const demos = [
    {
      id: 1,
      title: "Grocery Store Demo",
      description: "Interactive grocery store application showcasing modern UI/UX design and shopping cart functionality.",
      img: "/demos/grocery_store.jpg",
      demoUrl: "#",
    },
    {
      id: 2,
      title: "Dashboard Screenshot",
      description: "Analytics dashboard with real-time data visualization and customizable widgets.",
      img: "/demos/demo-screenshot.jpg",
      demoUrl: "#",
    },
  ];

  // Sample PowerPoint presentations
  const presentations = [
    {
      id: 1,
      title: "Digital Transformation Strategy",
      description: "Comprehensive guide to modernizing your business with cutting-edge technology solutions.",
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400",
      downloadUrl: "#",
      category: "Strategy",
    },
    {
      id: 2,
      title: "Cloud Architecture Overview",
      description: "Understanding cloud infrastructure, scalability, and best practices for enterprise deployment.",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      downloadUrl: "#",
      category: "Technology",
    },
    {
      id: 3,
      title: "AI & Machine Learning Applications",
      description: "Exploring AI capabilities and how machine learning can transform your business operations.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      downloadUrl: "#",
      category: "Innovation",
    },
  ];

  // Modern features
  const features = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI to automate processes and gain intelligent insights.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with AWS, Azure, and Google Cloud expertise.",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable business intelligence and visualizations.",
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Enterprise-grade security with encryption, compliance, and threat protection.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code and infrastructure.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive web applications using React, Next.js, and more.",
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development.",
    },
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const floatingCardVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div>
      {/* Modern Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        style={{ y, opacity }}
      >
        {/* Animated Particles Background */}
        <div className="particles-container">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle"
              initial={{ 
                x: `${particle.x}%`, 
                y: `${particle.y}%`,
                opacity: 0 
              }}
              animate={{
                y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <motion.div 
            className="hero-text" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform Your Business with
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {" "}SmartClient360
              </motion.span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Cutting-edge technology solutions powered by AI, Cloud, and Modern Web Technologies
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href="#projects" 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="floating-card card-1"
              variants={floatingCardVariants}
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovation</div>
            </motion.div>
            <motion.div 
              className="floating-card card-2"
              variants={floatingCardVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="card-icon">💡</div>
              <div className="card-text">Solutions</div>
            </motion.div>
            <motion.div 
              className="floating-card card-3"
              variants={floatingCardVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="card-icon">⭐</div>
              <div className="card-text">Excellence</div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.section>

      {/* Modern Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Technology Stack</h2>
            <p className="section-subtitle">
              We leverage the latest technologies to deliver exceptional results
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
                whileHover="hover"
              >
                <motion.div 
                  className="feature-icon"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Explore our portfolio of innovative solutions and successful implementations
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i> Code
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="demos-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Interactive Demos</h2>
            <p className="section-subtitle">
              Experience our solutions through live demonstrations
            </p>
          </div>
          <div className="demos-grid">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                className="demo-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDemo(demo)}
              >
                <div className="demo-image-container">
                  <img
                    src={demo.img}
                    alt={demo.title}
                    className="demo-image"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Demo+Image";
                    }}
                  />
                  <div className="demo-overlay">
                    <span className="demo-play-icon">▶</span>
                  </div>
                </div>
                <div className="demo-content">
                  <h3 className="demo-title">{demo.title}</h3>
                  <p className="demo-description">{demo.description}</p>
                  <motion.button 
                    className="demo-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {selectedDemo && (
          <DemoModal demo={selectedDemo} onClose={() => setSelectedDemo(null)} />
        )}
      </section>

      {/* PowerPoint Presentations Section */}
      <section id="presentations" className="presentations-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Presentations & Resources</h2>
            <p className="section-subtitle">
              Download our presentations and learn about our solutions
            </p>
          </div>
          <div className="presentations-grid">
            {presentations.map((presentation, index) => (
              <motion.div
                key={presentation.id}
                className="presentation-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, rotateY: 5 }}
              >
                <div className="presentation-thumbnail">
                  <img
                    src={presentation.thumbnail}
                    alt={presentation.title}
                    className="presentation-image"
                  />
                  <div className="presentation-badge">{presentation.category}</div>
                </div>
                <div className="presentation-content">
                  <h3 className="presentation-title">{presentation.title}</h3>
                  <p className="presentation-description">
                    {presentation.description}
                  </p>
                  <a
                    href={presentation.downloadUrl}
                    className="presentation-download"
                    download
                  >
                    <i className="bi bi-download"></i> Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">
              Let's discuss how SmartClient360 can help you achieve your goals
            </p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a 
                href="/contact" 
                className="btn-primary btn-large"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn-secondary btn-large"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
