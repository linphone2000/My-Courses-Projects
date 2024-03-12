<<<<<<< HEAD
import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ open,children }) {
  const dialog = useRef();

  

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
=======
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
>>>>>>> 0c531f5f5ef5a25727ffdd1d60d99e926a96c4b7
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
