import { UserInputError } from 'apollo-server-express';

const resolvers = {
  Query: {
    users: async (root, args, { User }) => {
      const allUsers = await User.find();
      return allUsers;
    },
  },
  Mutation: {
    addUser: async (root, { name, email, type, password }, { User }) => {
      const newUser = await new User({
        name,
        email,
        type,
        password,
      }).save();
      return newUser;
    },
  },
};

export default resolvers;
