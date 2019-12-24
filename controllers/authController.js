const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  req.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});
