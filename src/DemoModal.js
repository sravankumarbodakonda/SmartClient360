import React from "react";
import "./DemoModal.css";

export default function DemoModal({ demo, onClose }) {
  if (!demo) return null;
  
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
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
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}