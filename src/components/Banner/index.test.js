import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from ".";

const renderRoot = (props) => {
  return render(<Banner {...props} />);
};

it("renders Banner component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});

it("renders Banner left component correctly ", () => {
  renderRoot();
  expect(screen.getByTestId("left")).toBeInTheDocument();
});

it("renders Banner right component correctly ", () => {
  renderRoot();
  expect(screen.getByTestId("right")).toBeInTheDocument();
});
