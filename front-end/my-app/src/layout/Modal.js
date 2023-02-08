import React from "react";
import choose from "./choose.css"
// import ModalItem from "./ModalItem"

function Modal(props) {
 
function closeModal() {
    props.closeModal();
    }
   
    return (
      <div className="Modal" onClick={closeModal}>
        <div className="modalBody" onClick={(e) => e.stopPropagation()}>
          <button id="modalCloseBtn" onClick={closeModal}>
            ❌
          </button>
          {/* <ModalItem/>   */}
          {props.children}
        </div>
      </div>
    );
  }     
export default Modal;
