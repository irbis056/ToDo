const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: 40,
  },
  description: {
    type: String,
    maxlength: [1000, 'Description can be max 1000 characters long'],
  },
  status: {
    type: String,
    enum: ['completed', 'not completed'],
    default: 'not completed',
  },
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
