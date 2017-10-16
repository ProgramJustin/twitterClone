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
import mocks from './mocks';
// create instance of express server
const app = express();

// sAt the end, the schema and resolvers are combined using makeExecutableSchema:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// add middlewear inside app, Returns middleware that only parses json.

app.use(bodyParser.json());

// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  }),
);

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema,
  }),
);

// graphQLServer becomes an http server, app is the requestListener and handles request and response to the user.
const graphQLServer = createServer(app);

mocks().then(() => {
  // listen to port, log status
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen to port: ${constants.PORT}`);
    }
  });
});
