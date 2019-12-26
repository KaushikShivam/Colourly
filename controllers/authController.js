const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '90d'
  });

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  //1. Check if the user and email exists on the body or not
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('Please provide email/password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user && !(await user.correctPassword(password, user.password))) {
    return next(new AppError('The email/password is incorrect', 401));
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '90d'
  });

  res.status(200).json({
    status: 'success',
    token
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1. Get the token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('You are not logged in', 400));

  // 2. Verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // Errors already handled in the error controller -> JsonWebTokenError and ExpiredToken

  // 3. Check if the User still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return next(new AppError('The User belonging to this does not exist', 401));

  // 4. Check if the user changed the password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat))
    return next(
      new AppError('User recently changed password. Please login in again', 401)
    );

  // Grant access to the router
  req.user = freshUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError('You are not authorized to access this route', 403)
      );
    return next();
  };
};
