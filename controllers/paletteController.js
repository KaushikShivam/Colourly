const Palette = require('./../models/paletteModel');
const catchAsync = require('./../utils/catchAsync');

exports.createPalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.getAllPalettes = catchAsync(async (req, res, next) => {
  const palettes = await Palette.find();

  res.status(200).json({
    status: 'success',
    results: palettes.count,
    data: {
      palettes
    }
  });
});

exports.getPalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.updatePalette = catchAsync(async (req, res, next) => {
  const palette = await Palette.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      palette
    }
  });
});

exports.deletePalette = catchAsync(async (req, res, next) => {
  await Palette.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null
  });
});
