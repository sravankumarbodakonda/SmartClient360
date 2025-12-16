import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DemoModal.css";

export default function DemoModal({ demo, onClose }) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!demo) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        className="modal-bg" 
        onClick={onClose}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="modal" 
          onClick={e => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.02 }}
        >
        <h2>{demo.title}</h2>
        <img 
          src={demo.img} 
          alt={demo.title} 
          className="modal-img"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Demo+Image";
          }}
        />
        <p>{demo.description || demo.desc}</p>
        <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-btn">
          Visit Live Demo &rarr;
        </a>
        <motion.button 
          className="close-btn" 
          onClick={onClose}
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}