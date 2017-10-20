/* eslint-disable no-param-reassign */

import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import constants from './constants';
import { decodeToken } from '../services/auth';
// sAt the end, the schema and resolvers are combined using makeExecutableSchema:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
// create middleware inside express
async function auth(req, res, next) {
  try {
    // on each request we are gonna check if there is user authentication, if so, take id, put it inside user request object
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
    // continues running the code;
    return next();
  } catch (error) {
    throw error;
  }
}

export default app => {
  // add middlewear inside app, Returns middleware that only parses json.
  app.use(bodyParser.json());
  // use authentication
  app.use(auth);
  // Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    }),
  );
  app.use(
    constants.GRAPHQL_PATH,
    // make use authentication
    // req returns an object
    graphqlExpress(req => ({
      schema,
      context: {
        user: req.user,
      },
    })),
  );
};
