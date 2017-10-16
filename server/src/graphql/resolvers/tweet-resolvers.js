import Tweet from '../../models/Tweet';
// a resolver is a function that returns your data
export default {
  // findById is method from mongoose
  // _, { _id }) => Tweet.findById(_id) instead of findById(args.id), _id variable is created and is stored as Tweet.findById(_id)
  // find({}) finds everythings
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}),
  createTweet: (_, args) => Tweet.create(args),
  updateTweet: (_, { _id, ...rest }) =>
    Tweet.findByIdAndUpdate(_id, rest, { new: true }),
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndUpdate(_id);
      return {
        message: 'Delete Success!',
      };
    } catch (error) {
      throw error;
    }
  },
};
// rest can act as additional property being added to schema
