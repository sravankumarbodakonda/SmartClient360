import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

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
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ textDecoration: "none" }}>
          <Logo size="small" showText={true} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={(e) => handleNavClick(e, "#features")}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={(e) => handleNavClick(e, "#projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={(e) => handleNavClick(e, "#demos")}
              >
                Demos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={(e) => handleNavClick(e, "#presentations")}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
