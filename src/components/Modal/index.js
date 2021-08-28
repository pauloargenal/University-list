import React, { useContext } from "react";
import RNModal from "react-modal";
import "./modal.scss";
import ModalContext from "../../contexts/ModalContext";

if (process.env.NODE_ENV !== "test") RNModal.setAppElement("#root");

const Modal = () => {
  const { state, closeModal } = useContext(ModalContext);
  return (
    <>
      <RNModal
        overlayClassName="overlay"
        className="modal-container"
        isOpen={state.visible}
        ariaHideApp={false}
      >
        <div className="header">
          <h2 className="title" data-testid="title">
            {state.title}
          </h2>
          <span
            className="close material-icons md-42 gray"
            onClick={closeModal}
          >
            close
          </span>
        </div>
        <div className="modalcontent" data-testid="modalContent">
          {state.content()}
        </div>
      </RNModal>
    </>
  );
};

export default Modal;
