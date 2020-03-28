const mongoose = require('mongoose');
const validator = require('validator');
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
    role: {
      type: String,
      enum: ['user', 'admin'],
      defualt: 'user'
    },
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
    },
    passwordChangedAt: String
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

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  // Most of the users won't have the passwordChangedAt property
  // Only do the comparison if the passwordChangedAt exists, otheriwse just return false
  if (this.passwordChangedAt) {
    // timestamp will be in millisecond timestamp so we need to convert passwordChangedAt (Date) to timestamp
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    ); // millisecond
    return JWTTimestamp < changedTimestamp;
  }

  // False means not changed
  return false;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
