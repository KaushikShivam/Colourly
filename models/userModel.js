const mongoose = require('mongoose');
const validator = require('mongoose');
const bcrypt = require('bcryptjs');

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
      minlength: 8,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function(val) {
          return this.password === val; // will fail if it's false
        },
        message: 'password and passwordConfirm does not match'
      }
    }
  },
  {
    timestamps: true
  }
);

// middlewares
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Only do it if the password is modified, else next()

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// methods
userSchema.methods.correctPassword = async function(
  passwordToCheck,
  userPassword
) {
  return await bcrypt.compare(passwordToCheck, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
