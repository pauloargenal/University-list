import React from "react";
import { render } from "@testing-library/react";
import Loader from ".";

const renderRoot = () => {
  return render(<Loader />);
};

it("renders Loader component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
