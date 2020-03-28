const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check if email and password were sent
  if (!email || !password)
    return next(new AppError('Please provide email and password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email/password', 401)); // 401 -> unauthorized
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1. Check for token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in. Please login to get access', 401)
    );
  }

  // 2. Verify the token
  const decoded = await promisify(jwt.verify)(token, jwt.JWT_SECRET);

  // 3. If verification success, check if the user still exists;
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return next(new AppError('The user with this token doesnt exist', 401));

  // 4. Check if the user changed password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('Password recently changed. Please login again', 401)
    );
  }

  // If all goes while, call next() and give access
  // Put the entire user data on the request
  req.user = freshUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError('You do not have permission to perform this action', 403)
      ); // 403 -> forbidden
    next();
  };
};
