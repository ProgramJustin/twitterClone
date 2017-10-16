import TweetResolvers from './tweet-resolvers';
// query the database to extract tweets
export default {
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
  }
};
