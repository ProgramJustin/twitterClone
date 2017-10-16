import GraphQLDate from 'graphql-date';
import TweetResolvers from './tweet-resolvers';
// query the database to extract tweets
export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet
  },
};
