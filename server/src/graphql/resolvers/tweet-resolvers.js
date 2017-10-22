/* eslint-disable */
import Tweet from '../../models/Tweet';
import { requireAuth } from '../../services/auth';

// a resolver is a function that returns your data
export default {
  // findById is method from mongoose
  // _, { _id }) => Tweet.findById(_id) instead of findById(args.id), _id variable is created and is stored as Tweet.findById(_id)
  // find({}) finds everythings
  getTweet: async (_, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById;
    } catch (error) {
      throw error;
    }
    Tweet.findById(_id);
  },
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create(args);
    } catch (error) {
      throw error;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findByIdAndUpdate(_id, rest, { new: true });
    } catch (error) {
      throw error;
    }
  },

  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Delete Success!',
      };
    } catch (error) {
      throw error;
    }
  },
};
// rest can act as additional property being added to schema
