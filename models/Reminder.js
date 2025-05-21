const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  pet: {
    type: String,
    enum: ['Brownie', 'Lucky', 'Jack'],
    required: true
  },
  category: {
    type: String,
    enum: ['General', 'Lifestyle', 'Health'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  frequencyreminder: {
    type: String,
    enum: ['Everyday', 'One Day', 'One Week'],
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
