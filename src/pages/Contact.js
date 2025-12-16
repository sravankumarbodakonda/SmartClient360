import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Debug: Log configuration (remove in production)
    console.log("EmailJS Configuration:", {
      serviceID: serviceID ? "✓ Set" : "✗ Missing",
      templateID: templateID ? "✓ Set" : "✗ Missing",
      publicKey: publicKey ? "✓ Set" : "✗ Missing",
    });

    // Check if EmailJS is properly configured
    const isNotConfigured = 
      serviceID === "YOUR_SERVICE_ID" || 
      serviceID === "your_service_id_here" ||
      templateID === "YOUR_TEMPLATE_ID" || 
      templateID === "your_template_id_here" ||
      publicKey === "YOUR_PUBLIC_KEY" || 
      publicKey === "your_public_key_here" ||
      !serviceID || 
      !templateID || 
      !publicKey;

    if (isNotConfigured) {
      console.error("❌ EmailJS not configured!");
      console.error("Please update your .env file with actual EmailJS credentials:");
      console.error("REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx");
      console.error("REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx");
      console.error("REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx");
      console.error("\n📖 See EMAILJS_SETUP.md for detailed instructions");
      setErrorMessage("EmailJS is not configured. Please update your .env file with actual EmailJS credentials. See EMAILJS_SETUP.md for instructions.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
      return;
    }

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        subject: formData.subject || "No subject",
        message: formData.message,
        to_name: "SmartClient360 Team",
        reply_to: formData.email, // For reply-to functionality
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      // Method 1: Using the newer API format (recommended)
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("EmailJS Response:", response);

      if (response.status === 200 || response.text === "OK") {
        console.log("✅ Email sent successfully!");
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
      } else {
        throw new Error(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("❌ EmailJS Error Details:", {
        error: error,
        message: error.text || error.message,
        status: error.status,
        serviceID: serviceID,
        templateID: templateID,
      });

      // Provide user-friendly error messages
      let userErrorMessage = "Failed to send email. ";
      
      if (error.text) {
        if (error.text.includes("Invalid template ID")) {
          userErrorMessage += "Template ID is invalid. Please check your EmailJS template configuration.";
        } else if (error.text.includes("Invalid service ID")) {
          userErrorMessage += "Service ID is invalid. Please check your EmailJS service configuration.";
        } else if (error.text.includes("Invalid public key")) {
          userErrorMessage += "Public key is invalid. Please check your EmailJS API key.";
        } else if (error.text.includes("Forbidden")) {
          userErrorMessage += "Access denied. Please check your EmailJS API key and service permissions.";
        } else {
          userErrorMessage += error.text;
        }
      } else if (error.message) {
        userErrorMessage += error.message;
      } else {
        userErrorMessage += "Please check your EmailJS configuration and try again.";
      }

      setErrorMessage(userErrorMessage);
      setSubmitStatus("error");
      
      // Show error in console for debugging
      console.error("Error Message:", userErrorMessage);
      
      // Reset error status after 8 seconds (longer for error messages)
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "info@smartclient360.com",
      link: "mailto:info@smartclient360.com",
    },
    {
      icon: "📱",
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Location",
      content: "San Francisco, CA",
      link: "#",
    },
    {
      icon: "💼",
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM PST",
      link: "#",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content" data-aos="fade-up">
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Information Cards */}
          <div className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <a
                    href={info.link}
                    className="contact-info-link"
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    {info.content}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="form-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Send Us a Message
              </motion.h2>
              <motion.form 
                onSubmit={handleSubmit} 
                className="contact-form"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      placeholder="John Doe"
                      whileFocus={{ scale: 1.02, borderColor: "#185a9d" }}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="success-message">
                    <i className="bi bi-check-circle"></i> Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message-box">
                    <i className="bi bi-exclamation-circle"></i> 
                    <div>
                      <strong>Error:</strong> {errorMessage || "Something went wrong. Please try again."}
                      <br />
                      <small style={{ marginTop: "0.5rem", display: "block" }}>
                        Check the browser console for more details.
                      </small>
                    </div>
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span> Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send"></i> Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
