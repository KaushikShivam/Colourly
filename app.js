const express = require('express');
const morgan = require('morgan');

// Get all routes
const paletteRouter = require('./routes/paletteRoute');

const app = express();

// Morgan for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/palettes', paletteRouter);

app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  });
});

module.exports = app;
