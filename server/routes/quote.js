'use strict';

const Quote = require('../models/quote');
const express = require('express');

const router = new express.Router();

// GET - /quotes - List quotes
router.get('/', (req, res, next) => {
  Quote.find()
    .then((quotes) => res.json({ quotes }))
    .catch((err) => next(err));
});

module.exports = router;
