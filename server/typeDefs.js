import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    type: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, type: String!, password: String!): User
  }
`;
export default typeDefs;
