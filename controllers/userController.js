const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/userModel');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate('palettes');

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});
