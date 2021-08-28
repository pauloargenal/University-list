import React, { useReducer, createContext } from "react";
import PropTypes from "prop-types";
import { SHOW_MODAL, CLOSE_MODAL, CHANGE_MODAL_TITLE } from "./constants";

const initialState = {
  content: () => {},
  visible: false,
  title: ""
};

const ModalContext = createContext({ state: initialState });

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
        content: action.payload.content,
        title: action.payload.title
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        title: "",
        content: () => {}
      };
    case CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const showModal = (payload) => {
    dispatch({
      type: SHOW_MODAL,
      payload
    });
  };

  const changeModalTitle = (title) => {
    dispatch({
      type: CHANGE_MODAL_TITLE,
      payload: title
    });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{ state, showModal, closeModal, changeModalTitle }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContext;
