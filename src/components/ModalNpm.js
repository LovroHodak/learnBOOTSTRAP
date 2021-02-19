import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ModalNpm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Modal Npm</h1>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "gray" },
          content: { color: "orange" },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}
