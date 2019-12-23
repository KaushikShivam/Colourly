const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan);
}

// Middleware for body parser
app.use(express.json({ limit: '10kb' }));

module.exports = app;
