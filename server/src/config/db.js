/* eslint-disable no-console */

// see process in db
import mongoose from 'mongoose';
// import mongodb from constants
import constants from './constants';
// handle promise
mongoose.Promise = global.Promise;

// see the process in the mongo-db
mongoose.set('debug', true); // debug mode on
// normal testing
try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true,
  });
} catch (err) {
  // if there is no connection then try and create a connection
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  });
}
// if the connection works then you will see mongodb running
mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });
