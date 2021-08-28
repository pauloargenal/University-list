import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../utils/client";
import Loginform from ".";

const renderRoot = () => {
  return render(
    <ApolloProvider client={client}>
      <Loginform />
    </ApolloProvider>
  );
};

const simulateFormInputs = () => {
  fireEvent.input(screen.getByTestId("email-field"), {
    target: {
      value: "johndoe@gmail.com"
    }
  });

  fireEvent.input(screen.getByTestId("password-field"), {
    target: {
      value: "1234qwer"
    }
  });
};

it("renders Footer component correctly ", () => {
  const { asFragment } = renderRoot();
  expect(asFragment()).toMatchSnapshot();
});

describe("sign in form behavior", () => {
  beforeEach(() => {
    renderRoot();
  });

  it("displays error message if the form is submitted when field is empty", async () => {
    simulateFormInputs();
    fireEvent.click(screen.getByTestId("signin-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("alert").textContent).toBe(
        "Please fill up the required fields below"
      );
    });
  });
});
