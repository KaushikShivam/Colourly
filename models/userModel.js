const mongoose = require('mongoose');
const validator = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name']
    },
    email: {
      type: String,
      required: [true, 'A User must have an email'],
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password']
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
