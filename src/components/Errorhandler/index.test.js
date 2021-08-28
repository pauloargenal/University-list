import React from "react";
import { render } from "@testing-library/react";
import ErrorHandler from ".";

const clearMessage = jest.fn();
const message = "Error message ";
const renderRoot = () => {
  return render(<ErrorHandler message={message} clearMessage={clearMessage} />);
};

it("renders ErrorHandler component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
