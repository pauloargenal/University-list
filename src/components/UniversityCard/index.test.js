import React from "react";
import { render } from "@testing-library/react";
import UniversityCard from ".";

const renderRoot = () => {
  return render(
    <UniversityCard
      name="College of university"
      country="Phillipines"
      image="https://source.unsplash.com/800x900/?university"
      page="google.com"
    />
  );
};

it("renders Footer component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
