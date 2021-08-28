import React from "react";
import { render } from "@testing-library/react";
import Feedback from ".";

const renderRoot = () => {
  return render(<Feedback />);
};

it("renders Feedback component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
