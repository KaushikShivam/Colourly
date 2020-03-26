const mongoose = require('mongoose');
const slugify = require('slugify');

const paletteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Palette must have a name'],
      minLength: [10, 'A tour name must have more or equal that 10 characters']
    },
    emoji: {
      type: String,
      required: [true, 'A Palette must have an emoji']
    },
    slug: String
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
