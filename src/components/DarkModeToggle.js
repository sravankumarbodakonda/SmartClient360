import React from "react";
import { motion } from "framer-motion";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const lampVariants = {
    on: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    },
    off: {
      rotate: 0
    }
  };

  const lightVariants = {
    on: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    off: {
      opacity: 0,
      scale: 0.8
    }
  };

  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Lamp Base */}
      <div className="lamp-container">
        {/* Light Glow Effect */}
        <motion.div
          className="lamp-glow"
          variants={lightVariants}
          animate={isDarkMode ? "on" : "off"}
        />
        
        {/* Lamp Bulb */}
        <motion.svg
          width="28"
          height="36"
          viewBox="0 0 24 32"
          className="lamp-icon"
          variants={lampVariants}
          animate={isDarkMode ? "on" : "off"}
        >
          {/* Light Bulb */}
          <motion.path
            d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
            fill={isDarkMode ? "#FFD700" : "#FF8C00"}
            stroke={isDarkMode ? "#FFA500" : "#FF6B00"}
            strokeWidth="1.5"
          />
          {/* Bulb Base */}
          <rect x="9" y="17" width="6" height="4" fill={isDarkMode ? "#8B7355" : "#4A4A4A"} />
          {/* Filament */}
          {isDarkMode && (
            <motion.circle
              cx="12"
              cy="10"
              r="1.5"
              fill="#FFD700"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;
