import React from "react";
import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../utils/client";
import Footer from ".";

const renderRoot = () => {
  return render(
    <ApolloProvider client={client}>
      <Footer />
    </ApolloProvider>
  );
};

it("renders Footer component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});
