import React from "react";
import { render } from "@testing-library/react";
import Explore from ".";

const renderRoot = () => {
  return render(<Explore />);
};

it("renders Explore component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
