import GraphQLDate from 'graphql-date';
import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
// query the database to extract tweets
export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    getUser: UserResolvers.getUser,
    getUsers: UserResolvers.getUsers,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  },
};
