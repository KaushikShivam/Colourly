const mongoose = require('mongoose');
const slugify = require('slugify');

const paletteSchema = new mongoose.Schema(
  {
    paletteName: {
      type: String,
      required: [true, 'A Palette must have a name'],
      trim: true,
      unique: true,
      minlength: 10
    },
    slug: String,
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: [true, ' A palette should always have a user']
    },
    colors: {
      type: [
        {
          name: {
            type: String,
            required: [true, 'A Palette must have a color name']
          },
          color: {
            type: String,
            required: [true, 'A Palette must have a color']
          }
        }
      ],
      required: [true, 'A Palette must have colors']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Needed for virtual populate
    toObject: { virtuals: true }
  }
);

paletteSchema.pre('save', function(next) {
  this.slug = slugify(this.paletteName, { replacement: '-', lower: true });
  next();
});

paletteSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next();
});

// TODO: Add User association soon

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
