'use strict';

const Quote = require('../models/quote');
const express = require('express');
const imagekit = require('./../lib/imagekit');
const openai = require('./../lib/openai');
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

// Search for quotes
router.get('/search', (req, res, next) => {
  const { term } = req.query;

  // Quote.find({ message: new RegExp(term, 'ig') })
  Quote.find({
    $or: term.split(' ').map((word) => {
      return { message: new RegExp(word, 'ig') };
    })
  })
    .sort({ createdAt: -1 })
    .limit(10)
    .then((quotes) => {
      res.json({ quotes });
    })
    .catch((error) => {
      next(error);
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
router.post('/', routeGuard, (req, res, next) => {
  const { message, author, picture, position } = req.body;

  if (picture) {
    Quote.create({ message, author, picture, position })
      .then((quote) => res.json({ quote }))
      .catch((err) => next(err));
  } else {
    console.log(message, process.env.OPENAI_API_KEY);
    openai
      .createImage({
        prompt: message,
        n: 1,
        size: '512x512'
      })
      .then((response) => {
        const generatedPictureUrl = response.data.data[0].url;

        return imagekit.upload({
          file: generatedPictureUrl,
          fileName: `${Math.random()}.png`
        });
      })
      .then((response) => {
        return Quote.create({
          message,
          author,
          picture: response.url,
          position
        });
      })
      .then((quote) => {
        res.json({ quote });
      })
      .catch((err) => {
        console.log(err.response);
        next(err);
      });
  }
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
