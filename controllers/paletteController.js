const Palette = require('./../models/paletteModel');

const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

exports.getAllPalettes = catchAsync(async (req, res, next) => {
  const palettes = await Palette.find().populate({
    path: 'user',
    select: 'name'
  });

  res.status(200).json({
    status: 'success',
    data: {
      palettes
    }
  });
});

exports.getPalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.findById(req.params.id);

  if (!palette) return next(new AppError('No Palette found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.createPalette = catchAsync(async (req, res, next) => {
  // add user id to the palette
  req.body.user = req.user.id;

  const palette = await Palette.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.updatePalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!palette) return next(new AppError('No Palette found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.deletePalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.findByIdAndDelete(req.params.id);

  if (!palette) return next(new AppError('No Palette found with this ID', 404));

  res.status(204).json({
    status: 'success',
    data: null
  });
});
