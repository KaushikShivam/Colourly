const mongoose = require('mongoose');
const slugify = require('slugify');

const paletteSchema = mongoose.Schema(
  {
    paletteName: {
      type: String,
      required: [true, 'A Palette must have a name']
    },
    emoji: {
      type: String,
      required: [true, 'A Palette must have an emoji']
    },
    slug: {}
  },
  {
    timestamps: true
  }
);

paletteSchema.pre('save', function(next) {
  this.slug = slugify(this.paletteName, { lower: true });
  next();
});

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
