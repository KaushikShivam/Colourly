const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');
// Get all routes
const paletteRouter = require('./routes/paletteRoute');

const app = express();

// Morgan for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/palettes', paletteRouter);

// Handle unhandled routes
app.use('*', (req, res) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
