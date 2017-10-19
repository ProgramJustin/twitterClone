import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import constants from './constants';
// sAt the end, the schema and resolvers are combined using makeExecutableSchema:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


export default app => {
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
}
