import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">{props.message}</div>
      <footer className="actions">
        <Button>Okay</Button>
      </footer>
    </div>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="card1"></div>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
