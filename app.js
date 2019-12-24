const express = require('express');
const morgan = require('morgan');
const path = require('path');
const AppError = require('./utils/AppError');
const globalErrorMiddleware = require('./controllers/errorController');

const app = express();

// Import all the routers
const paletteRouter = require('./routes/paletteRoutes');
const userRouter = require('./routes/userRoutes');

// Middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware for body parser
app.use(express.json({ limit: '10kb' }));

// All the routes will go here
app.use('/api/v1/palettes', paletteRouter);
app.use('/api/v1/users', userRouter);

// Serve static assets in production - React
if (process.env.NODE_ENV === 'production') {
  // Set static folder for public folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// middleware for all the unhandled routes
app.all('*', (req, res, next) => {
  // If the next function recieves an argument, express will consider it as an error. It will then skip all the next middlewares and directly hit the error handling middleware
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// GLobal error handling middleware
app.use(globalErrorMiddleware);

module.exports = app;
