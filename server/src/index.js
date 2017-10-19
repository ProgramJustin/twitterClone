/* eslint-disable no-console */
import express from 'express';
import { createServer } from 'http';
// import db
import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';
// create instance of express server
const app = express();

middlewares(app);

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
