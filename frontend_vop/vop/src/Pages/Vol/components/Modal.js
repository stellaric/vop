import React from 'react';

export default function Modal({ imgUrl, onClose }) {
  return (
    <div className='modal-overlay'>
   
      <div className="modal-img">
       <img src={imgUrl} alt="Image en grand format" />:
    </div>
    <div className='modal-content'>
    <span className="close" onClick={onClose}>&times;</span>
        <p>ceci est un container</p>
    </div>
    </div>
  );
}
