const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    'title': {
    required: true,
    type: String
  },

  'description': {
    required: true,
    type: String
  },

  'actors': {
    required: true,
    type: Array
  },
});

module.exports = mongoose.model('Movie', movieSchema);
