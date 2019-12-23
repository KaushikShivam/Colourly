const Palette = require('./../models/paletteModel');

exports.createPalette = async (req, res, next) => {
  try {
    const palette = await Palette.create(req.body);

    res.status(201).json({
      status: 'error',
      data: {
        palette
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err
    });
  }
};

exports.getAllPalettes = async (req, res, next) => {
  try {
    const palettes = await Palette.find();

    res.status(200).json({
      status: 'success',
      results: palettes.count,
      data: {
        palettes
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getPalette = async (req, res, next) => {
  try {
    const palette = await Palette.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        palette
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updatePalette = async (req, res, next) => {
  try {
    const palette = Palette.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        palette
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
