'use strict';

const Quote = require('../models/quote');
const express = require('express');
const { route } = require('./base');
const { routeGuard } = require('./../middleware/routeGuard');

const router = new express.Router();

// GET - /quotes - List all quotes
router.get('/', (req, res, next) => {
  Quote.find()
    .then((quotes) => res.json({ quotes }))
    .catch((err) => next(err));
});

// GET - /quotes/random - Fetches a random quote
router.get('/random', (req, res, next) => {
  Quote.find().then((quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
  });
});

// GET - /quotes/:id - Fetch single quote
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Quote.findById(id)
    .then((quote) => res.json({ quote }))
    .catch((err) => next(err));
});

// POST - /quotes - Creates a new quote
router.post('/', (req, res, next) => {
  const { message, author, picture } = req.body;

  Quote.create({ message, author, picture })
    .then((quote) => res.json({ quote }))
    .catch((err) => next(err));
});

// PATCH - /quotes/:id - Updates an existing quote
router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const { message, author } = req.body;
  Quote.findByIdAndUpdate(id, { message, author }, { new: true })
    .then((quote) => res.json({ quote }))
    .catch((err) => next(err));
});

// DELETE - /quotes/:id - Deletes an existing quote
router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  Quote.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch((err) => next(err));
});

module.exports = router;
