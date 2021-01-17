import React from "react";
import ReactModal from "react-modal";

const OptionModal = props => {
  return (
    <ReactModal
      contentLabel={"selected option"}
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS={200}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "100px",
          left: "20px",
          right: "20px",
          bottom: "100px",
          border: "1px solid #ccc",
          background: "#333745",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          textAlign: "center",
          color: "white"
        }
      }}
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleCloseModal}>
        Close
      </button>
    </ReactModal>
  );
};

export default OptionModal;
