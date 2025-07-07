import React from "react";
import "./Modal.css";

const Modal = ({ guide, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-inner">
          {/*<div className="modal-video">
            <video src={guide.video} controls autoPlay />
          </div>*/}
          <div className="modal-image">
            <img src={guide.image} alt={guide.name || "Guide"}></img>
          </div>
          <div className="modal-info">
            <h2>{guide.name}</h2>
            <p style={{ fontSize: "20px" }}>{guide.title}</p>
            <p style={{}}>{guide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
