import { UserInputError } from 'apollo-server-express';

const resolvers = {
  Query: {
    getAllUsers: async (root, args, { User }) => {
      const allUsers = await User.find();
      return allUsers;
    },
    emailExists: async (root, email, { User }) => {
      const emailExists = await User.findOne(email);
      return emailExists ? true : false;
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
