import React from "react";
import Modal from "./../../utils/Modal";

const HoverEditor = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <div>
      {showModal && (
        <Modal>
          <div className="modal--inner">
            Edit Text
            <button>Bold</button>
            <button>Underline</button>
            <button>Caps</button>
            <button>Italics</button>
            <button>Quotation</button>
            <button>Private Note</button>
            <button
              style={{ background: "papyawhip" }}
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      )}
      
    </div>
  );
};

export default HoverEditor;
