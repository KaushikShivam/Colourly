const Palette = require('./../models/paletteModel');

exports.createPalette = async (req, res, next) => {
  try {
    const palette = await Palette.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        palette
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getAllPalettes = async (req, res, next) => {
  try {
    const palettes = await Palette.find();

    res.status(200).json({
      status: 'success',
      data: {
        palettes
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getPalette = async (req, res, next) => {
  try {
    const palette = await Palette.findById(req.params.id);

    if (!palette) {
      return res.status(400).json({
        status: 'fail',
        message: err
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        palette
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updatePalette = async (req, res, next) => {};

exports.deletePalette = async (req, res, next) => {};
