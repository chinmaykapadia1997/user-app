import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message}/>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
