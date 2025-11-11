import React from "react";
import "./DemoModal.css";

export default function DemoModal({ demo, onClose }) {
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{demo.title}</h2>
        <img src={demo.img} alt={demo.title} className="modal-img"/>
        <p>{demo.desc}</p>
        <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-btn">
          Visit Live Demo &rarr;
        </a>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}