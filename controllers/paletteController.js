const Palette = require('./../models/paletteModel');

const createPalette = async (req, res, next) => {
  try {
    const palette = await Palette.create(req.body);

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
