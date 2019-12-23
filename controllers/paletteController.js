const Palette = require('./../models/paletteModel');

exports.createPalette = async (req, res, next) => {
  try {
    const palette = await Palette.create(req.body);

    res.status(400).json({
      status: 'error',
      data: {
        palette
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error
    });
  }
};
