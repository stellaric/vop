import React from "react";
import "../Vol.css";

export default function Modal({ imgUrl, titre, description, prix,lien, onClose }) {
  const handleClick =()=>window.open(lien)
  
  return (
    <div className="modal-overlay">
      <div className="modal-img">
        <img src={imgUrl} alt="Image en grand format" id="img-hover"/>
      </div>
      <div className="modal-content">
        <div className="modal-txt">
          <h2>{titre}</h2>
          <p>{description}</p>
          <p>{prix}</p>
          <div className="modal-footer">
              <button type="submit" onClick={handleClick}>Réserver</button>

          </div>
        </div>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
}
