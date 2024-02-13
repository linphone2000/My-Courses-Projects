import React from 'react';

function Modal({ isOpen, onClose, children }) {
  const modalClasses = isOpen ? 'modal fadeIn px-10 w-100' : 'modal'; // Add animation class if open

  return (
    <div className="modal-overlay">
      <div className={modalClasses}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
