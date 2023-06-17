const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    maxlength: 40,
  },
  email: {
    type: String,
    required: [true, 'Please provide user email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide an email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
