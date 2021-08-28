import React from "react";
import { render } from "@testing-library/react";
import Search from ".";

const handleSearch = jest.fn();
const renderRoot = () => {
  return render(<Search handleSearch={handleSearch} />);
};

it("renders Search component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
