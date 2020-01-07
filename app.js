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

// Add handler for uncaught routes
app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;
