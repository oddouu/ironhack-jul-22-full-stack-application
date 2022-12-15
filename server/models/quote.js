'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    picture: {
      type: String
    }
  },
  {
    timestamp: true
  }
);

const Quote = mongoose.model('Quote', schema);

module.exports = Quote;
