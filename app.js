const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Import all the routers
const paletteRouter = require('./routes/paletteRoutes');

// Middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware for body parser
app.use(express.json({ limit: '10kb' }));

// All the routes will go here
app.use('/api/v1/palettes', paletteRouter);

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
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  });
});

module.exports = app;
