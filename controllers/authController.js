const jwt = require('jsonwebtoken');

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
