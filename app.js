const express = require('express');
const morgan = require('morgan');

// Get all routes
const paletteRouter = require('./routes/paletteRoute');

const app = express();

// Morgan for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body parser
app.use(express.json());

// Mount all routers
app.use('/api/v1/palettes', paletteRouter);

module.exports = app;
