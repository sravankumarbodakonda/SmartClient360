import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";
import DarkModeToggle from "./components/DarkModeToggle";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (e, targetId) => {
    if (location.pathname !== "/") {
      return; // Let React Router handle navigation
    }
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`navbar navbar-expand-lg ${isScrolled ? "navbar-scrolled" : ""}`}
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ textDecoration: "none" }}>
          <Logo size="small" showText={true} />
        </Link>
        <div className="navbar-right">
          <div className="dark-mode-toggle-wrapper desktop-only">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <motion.button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span 
              className="navbar-toggler-icon"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.button>
        </div>
        <motion.div 
          className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          id="navbarNav"
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : "0",
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", target: "#features", label: "Features" },
              { path: "/", target: "#projects", label: "Projects" },
              { path: "/", target: "#demos", label: "Demos" },
              { path: "/", target: "#presentations", label: "Resources" },
              { path: "/contact", target: null, label: "Contact" }
            ].map((item, index) => (
              <motion.li 
                key={item.label}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                    to={item.path}
                    onClick={(e) => item.target && handleNavClick(e, item.target)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>
          <div className="dark-mode-toggle-wrapper mobile-only">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "bi-linkedin", url: "#", label: "LinkedIn" },
    { icon: "bi-github", url: "#", label: "GitHub" },
    { icon: "bi-twitter", url: "#", label: "Twitter" },
    { icon: "bi-envelope", url: "mailto:info@smartclient360.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "Demos", path: "/#demos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-title">
              <Logo size="small" showText={true} />
            </div>
            <p className="footer-description">
              Transforming businesses with cutting-edge technology solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target={social.url.startsWith("http") || social.url.startsWith("mailto") ? "_blank" : "_self"}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : ""}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#features" className="footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  AI & ML
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope"></i>
                <a href="mailto:info@smartclient360.com">info@smartclient360.com</a>
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} SmartClient360 LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3
    }
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to light mode
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Update document class for dark mode
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
