import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation add_user(
    $name: String!
    $email: String!
    $type: String!
    $password: String!
  ) {
    addUser(name: $name, email: $email, type: $type, password: $password) {
      name
      email
      type
      password
    }
  }
`;

export const EMAIL_EXISTS = gql`
  query email_exists($email: String!) {
    emailExists(email: $email)
  }
`;
