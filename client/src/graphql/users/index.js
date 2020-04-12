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
