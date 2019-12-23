const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan);
}

// Middleware for body parser
app.use(express.json({ limit: '10kb' }));

// All the routes will go here

// Serve static assets in production - React
if (process.env.NODE_ENV === 'production') {
  // Set static folder for public folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
