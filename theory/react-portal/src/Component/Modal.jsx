import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
const Modal = (props) => {
  function hideModal() {
    props.hideMoalAttribute();
  }
  return ReactDOM.createPortal(
    <>
      <div className={`alert ${props.showModal ? "" : "hidden"}`}>
        <h2>This is an Alert!</h2>
        <p>
          This is a very simple example of how a custom alert window can be
          created and displayed dynamically using JavaScript.
        </p>
        {/* <button className="modal-btn" onClick={hideModal}> */}
        {/* OR calling directly parent attribute */}
        <button className="modal-btn" onClick={props.hideMoalAttribute}>
          OK
        </button>
      </div>
      {/* This is just to fadeout background ie. overlay */}
      <div className={`overlay ${props.showModal ? "" : "hidden"}`}></div>
    </>,
    document.getElementById("root-portal")
  );
};

export default Modal;
