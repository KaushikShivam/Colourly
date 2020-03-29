const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');
// Get all routes
const paletteRouter = require('./routes/paletteRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Morgan for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  max: 100, // maximum requests
  windowMs: 60 * 60 * 1000, // in how many hours?
  message: 'Too many requests from this IP. Please try again in an hour'
});

// Only limiting our api
app.use('/api', limiter);

// Set secure http headers on api
app.use(helmet());

// body parser with data limit
app.use(
  express.json({
    limit: '10kb'
  })
);

// Data sanitization against NoSql query injection
// will look at request body, params and query string and filter out all of the dollar signs and dots
app.use(mongoSanitize());
// Data sanitization against cross site scripting attacks
app.use(xss());

// parameter pollution prevent
app.use(hpp());

app.use('/api/v1/palettes', paletteRouter);
app.use('/api/v1/users', userRouter);

// Handle unhandled routes
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
