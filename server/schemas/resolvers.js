const { AuthenticationError } = require("apollo-server-express");
const { Doctor, User, Thought } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    doctor: async (parent, args, context) => {
      return await Doctor.find();
    },
    singledoctor: async (parent, args) => {
      return await Doctor.findById(args._id);
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText: args.thoughtText,
          user: context.user._id,
          doctor: args.doctorId
        });
        

        await Doctor.findOneAndUpdate({
          _id: args.doctorId
        }, 
        {
          $addToSet: { reviews: thought._id}
        })
        return thought;

      }
    },
  },
};

module.exports = resolvers;
