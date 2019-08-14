import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    Users: [User]
  }

  type User {
    _id: ID
    email: String
    password: String
    role: String
    firstName: String
    LastName: String
  }

  type Mutation {
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
  }

  input UserInput {
    email: String!
    password: String!
    role: String
    firstName: String
    lastName: String
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
