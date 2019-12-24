const AppError = require('./../utils/AppError');

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    // Operational error that we trust
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    // Programming error or some unknown error. So we send a generic message instead of leaking anything to the client
    // 1. Log the error that will show up in the heroku logs for dev
    console.error('ERROR', err);

    // 2. Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Oops! Something went wrong. Please try again later'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'CastError') error = handleCastErrorDB(error);

    sendErrorProd(error, res);
  }
};
