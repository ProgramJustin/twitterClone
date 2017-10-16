import Tweet from '../../models/Tweet';
// a resolver is a function that returns your data
export default {
  // findById is method from mongoose
  // _, { _id }) => Tweet.findById(_id) instead of findById(args.id), _id variable is created and is stored as Tweet.findById(_id) 
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}),
};
// find({}) finds everythings
