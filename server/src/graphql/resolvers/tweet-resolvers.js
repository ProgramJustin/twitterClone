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
  getUserTweets: async (_, args, { user } ) => {
    try {
      await requireAuth(user);
      return Tweet.find({ user: user._id}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      // ... args: spread everyting from the object args, if not you will have an object inside another object
      return Tweet.create({ ...args, user: user._id});
    } catch (error) {
      throw error;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id });

      if(!tweet) {
        throw new Error('Not Found');
      }
      Object.entries(rest).forEach(([key, value]) => {
        tweet[key] = value;
      });
      // this is a promise and this is what graphql wants
      return tweet.save();

    } catch (error) {
      throw error;
    }
  },

  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id });

      if(!tweet) {
        throw new Error('Not Found');
      }
      await tweet.remove();
      return {
        message: 'Delete Success!',
      };
    } catch (error) {
      throw error;
    }
  },
};
// rest can act as additional property being added to schema
