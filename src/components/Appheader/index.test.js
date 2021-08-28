import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../utils/client";
import ModalContext from "../../contexts/ModalContext";
import Navbar from ".";

const showModal = jest.fn();
const renderRoot = (props) => {
  return render(
    <ApolloProvider client={client}>
      <ModalContext.Provider value={{ showModal }}>
        <Navbar {...props} />
      </ModalContext.Provider>
    </ApolloProvider>
  );
};

it("renders navbar correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});

it("calls showModal if sign in button is clicked", () => {
  renderRoot();
  fireEvent.click(screen.getByTestId("signIn"));
  expect(showModal).toHaveBeenCalledTimes(1);
});

it("calls showModal if log in button is clicked", () => {
  renderRoot();
  fireEvent.click(screen.getByTestId("login"));
  expect(showModal).toHaveBeenCalledTimes(1);
});
