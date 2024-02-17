import React from "react";

export const Modal = ({ onClose, src, label, text }) => {
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal"  onClick={handleClickOutside}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={src} alt="Travel" className="modal-img" />
        <h2>{label}</h2>
        <p className="modal_paragraph-text">{text}</p>
      </div>
    </div>
  );
};
