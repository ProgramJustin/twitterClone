import express from 'express';
import bodyParser from 'body-parser';
// import db
import './config/db';
// create instance of express server
const app = express();

// what port to listen to, if process.env.PORT is undefined then choose port 3000
const PORT = process.env.PORT || 3000;


// add middlewear inside app
app.use(bodyParser.json());

// listen to port, log status
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
