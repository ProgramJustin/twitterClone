// most important file for graphql, graphql is a query language, it works between the client and the server, this takes up set up

// Query is about getting data, mutation is about everythinng else

export default `
type Tweet {
  _id: ID!
  text: String!
}

type Query {
 getTweet(_id: ID!): Tweet
 getTweets: [Tweet]
}

type Mutation {
  createTweet(text: String!): Tweet
}

schema {
  query: Query
  mutation: Mutation
}
`;
// the underscore in _id is very important
// getTweets: gets all the tweets, a list of tweets
// String! says it must have a string
// createTweet(text: String!): ! says you must input a string
