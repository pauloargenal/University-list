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

export { subscription, signup };
