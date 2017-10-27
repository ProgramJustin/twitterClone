import GraphQLDate from 'graphql-date';
import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
import User from '../../models/User';
// query the database to extract tweets
export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({ user }) => User.findById(user),


  },
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    getUser: UserResolvers.getUser,
    getUsers: UserResolvers.getUsers,
    me: UserResolvers.me,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
  },
};
