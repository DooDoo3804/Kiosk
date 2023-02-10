import React from "react";
import choose from "./choose.css"
// import ModalItem from "./ModalItem"
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

function Modal(props) {
 
function closeModal() {
  props.closeModal(); 
  }
   
    return (

      <div className="Modal" onClick={closeModal}>
        <div className="modalBody" onClick={(e) => e.stopPropagation()}>
          <Link to="/">
          <button id="modalCloseBtn" onClick={closeModal}>
            <span style={{fontSize : "70px"}}>❌</span>
          </button>
          </Link>
          {/* <ModalItem/>   */}
          {props.children}
        </div>
      </div>
    );
  }     
export default Modal;

