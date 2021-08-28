import React from "react";
import { render, screen } from "@testing-library/react";
import ModalContext from "../../contexts/ModalContext";
import Modal from ".";

it("shows modal if visible is true", () => {
  const state = {
    visible: true,
    title: "Modal Title",
    // eslint-disable-next-line react/display-name
    content: () => <p>This is a modal</p>
  };
  render(
    <ModalContext.Provider value={{ state }}>
      <Modal />
    </ModalContext.Provider>
  );
  expect(screen.getByTestId("modalContent").outerHTML).toBe(
    '<div class="modalcontent" data-testid="modalContent"><p>This is a modal</p></div>'
  );
  expect(screen.getByTestId("title").textContent).toBe(state.title);
});
