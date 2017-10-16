import TweetResolvers from './tweet-resolvers';
// query the database to extract tweets
export default {
  Query: {
    getTweets: TweetResolvers.getTweets,
  },
};
