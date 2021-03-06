const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model('event', EventSchema);