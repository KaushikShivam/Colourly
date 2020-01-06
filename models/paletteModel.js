const mongoose = require('mongoose');

const paletteSchema = mongoose.Schema(
  {
    paletteName: {
      type: String,
      required: [true, 'A Palette must have a name']
    },
    emoji: {
      type: String,
      required: [true, 'A Palette must have an emoji']
    }
  },
  {
    timestamps: true
  }
);

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
