import React from "react";
import { render } from "@testing-library/react";
import HowItWorks from ".";

const renderRoot = () => {
  return render(<HowItWorks />);
};

it("renders HowItWorks component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
