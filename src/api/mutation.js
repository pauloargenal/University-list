import { gql } from "@apollo/client";

const subscription = gql`
  mutation ($subscriptionEmail: String!) {
    subscription(email: $subscriptionEmail) {
      email
    }
  }
`;

const signup = gql`
  mutation (
    $signupUsername: String!
    $signupEmail: String!
    $signupPassword: String!
  ) {
    signup(
      username: $signupUsername
      email: $signupEmail
      password: $signupPassword
    ) {
      token
      user {
        email
        id
        username
      }
    }
  }
`;

const login = gql`
  mutation ($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
      user {
        email
        id
        username
      }
    }
  }
`;

export { subscription, signup, login };
