import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Modal = forwardRef(function Modal({ data }, ref) {
  const dialog = useRef();
  const controls = useAnimation();

  function handleClose() {
    controls.start({ opacity: 0, y: 100, transition: { duration: 0.3 } });
    setTimeout(() => {
      dialog.current.style.display = "none";
    }, 300); // Hide the modal after animation completes
  }

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.style.display = "block";
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
    },
    close() {
      handleClose();
    },
  }));

  const { heading, paragraph } = data;

  return (
    <motion.dialog
      ref={dialog}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <h1 className="text-xl font-bold mb-4">{heading}</h1>
          <p className="mb-4">{paragraph}</p>
          <button
            onClick={handleClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </motion.div>
      </div>
    </motion.dialog>
  );
});

export default Modal;
