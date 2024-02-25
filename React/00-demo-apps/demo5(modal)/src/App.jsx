import { useRef, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const modal = useRef();

  const data = {
    heading: "This is modal heading",
    paragraph: "This is modal paragraph",
  };

  function handleOpenModal() {
    modal.current.open();
  }

  return (
    <>
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-8">App Component</h1>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button>
      </div>
      <Modal
        ref={modal}
        data={data}
        style={{ transition: "opacity 0.3s ease-in-out" }}
      />
    </>
  );
}
export default App;
