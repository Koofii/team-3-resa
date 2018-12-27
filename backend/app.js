// @ts-nocheck
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// body parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS Error Handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    return res.status(200).json({});
  }
  next();
});

const destinationRoutes = require('./routes/destinations')

app.use('/', destinationRoutes)

module.exports = app;
