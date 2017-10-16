import Tweet from '../../models/Tweet';
// a resolver is a function that returns your data
export default {
  getTweets: () => Tweet.find({})
}
// find({}) finds everythings
