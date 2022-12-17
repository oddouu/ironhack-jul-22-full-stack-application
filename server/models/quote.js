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
    },
    position: {
      lat: {
        type: Number,
        min: -90,
        max: 90
      },
      lng: {
        type: Number,
        min: -180,
        max: 180
      }
    }
  },
  {
    timestamps: true
  }
);

const Quote = mongoose.model('Quote', schema);

module.exports = Quote;
