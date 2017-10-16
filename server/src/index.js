/* eslint-disable no-console */

import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import bodyParser from 'body-parser';
import { createServer } from 'http';
// import db
import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
// create instance of express server
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});



// add middlewear inside app
app.use(bodyParser.json());

app.use('/graphiql', graphiqlExpress({
  endpointURL: constants.GRAPHQL_PATH
}));

app.use(constants.GRAPHQL_PATH, graphqlExpress({
  schema
}));

const graphQLServer = createServer(app);
// listen to port, log status
graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${constants.PORT}`);
  }
});
