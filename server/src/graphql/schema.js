// most important file for graphql, graphql is a query language, it works between the client and the server, this takes up set up

export default `
type Tweet {
  _id: String
  text: String
}

type Query {
 getTweets: [Tweet]
}

schema {
  query: Query
}
`;
// the underscore in _id is very important
// getTweets: gets all the tweets, a list of tweets
