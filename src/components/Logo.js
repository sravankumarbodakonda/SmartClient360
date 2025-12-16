import React from "react";
import { motion } from "framer-motion";

const Logo = ({ size = "medium", showText = true, className = "" }) => {
  const sizes = {
    small: { width: 32, height: 32, fontSize: "1rem" },
    medium: { width: 48, height: 48, fontSize: "1.5rem" },
    large: { width: 64, height: 64, fontSize: "2rem" },
  };

  const { width, height, fontSize } = sizes[size] || sizes.medium;

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        rotate: { duration: 1, ease: "easeInOut" },
        scale: { duration: 0.3 }
      }
    }
  };

  const orbitVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      className={`logo-container ${className}`} 
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        variants={logoVariants}
      >
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#43cea2", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#43cea2", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#185a9d", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background Circle */}
        <circle cx="100" cy="100" r="95" fill="url(#logoGrad1)" opacity="0.1"/>
        
        {/* Outer Ring (360 degrees) */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="url(#logoGrad1)" strokeWidth="3" opacity="0.3"/>
        <circle cx="100" cy="100" r="75" fill="none" stroke="url(#logoGrad2)" strokeWidth="2" opacity="0.5"/>
        
        {/* Rocket Body */}
        <path d="M 100 140 L 85 170 L 100 165 L 115 170 Z" fill="url(#logoGrad2)"/>
        <rect x="90" y="100" width="20" height="45" rx="10" fill="url(#logoGrad1)"/>
        
        {/* Rocket Window */}
        <circle cx="100" cy="120" r="6" fill="#ffffff" opacity="0.9"/>
        
        {/* Rocket Wings */}
        <path d="M 85 130 L 75 145 L 85 140 Z" fill="url(#logoGrad2)" opacity="0.8"/>
        <path d="M 115 130 L 125 145 L 115 140 Z" fill="url(#logoGrad2)" opacity="0.8"/>
        
        {/* Rocket Flame */}
        <ellipse cx="100" cy="170" rx="8" ry="12" fill="#43cea2" opacity="0.7"/>
        <ellipse cx="100" cy="175" rx="5" ry="8" fill="#81e6d9" opacity="0.8"/>
        
        {/* Orbit Paths (360 concept) - Animated */}
        <motion.g
          variants={orbitVariants}
          animate="rotate"
          style={{ transformOrigin: "100px 100px" }}
        >
          <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#logoGrad2)" strokeWidth="2" opacity="0.4" transform="rotate(0 100 100)"/>
          <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#logoGrad2)" strokeWidth="2" opacity="0.4" transform="rotate(60 100 100)"/>
          <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#logoGrad2)" strokeWidth="2" opacity="0.4" transform="rotate(120 100 100)"/>
        </motion.g>
        
        {/* Stars/Points */}
        <circle cx="100" cy="40" r="3" fill="#43cea2"/>
        <circle cx="160" cy="100" r="3" fill="#667eea"/>
        <circle cx="100" cy="160" r="3" fill="#764ba2"/>
        <circle cx="40" cy="100" r="3" fill="#43cea2"/>
      </motion.svg>
      {showText && (
        <motion.span
          className="logo-text"
          style={{
            fontSize,
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #43cea2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          SmartClient360
        </motion.span>
      )}
    </motion.div>
  );
};

export default Logo;

