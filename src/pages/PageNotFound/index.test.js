import React from "react";
import { render, screen } from "@testing-library/react";
import PageNotFound from ".";

const renderRoot = () => {
  return render(<PageNotFound />);
};

it("renders PageNotFound component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});

it("calls home page button in page", () => {
  renderRoot();
  expect(screen.getByTestId("home")).toBeInTheDocument();
});
