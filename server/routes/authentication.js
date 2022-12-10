'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { routeGuard } = require('../middleware/routeGuard');

const saltRounds = 10;

// POST /authentication/signup
router.post('/signup', (req, res, next) => {
  const { email, password, name } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: 'This user already exist' });
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ email, password: hashedPassword, name });
    })
    .then((createdUser) => {
      const { email, name, _id } = createdUser;
      const user = { email, name, _id };
      res.json({ user: user });
    })
    .catch((err) => next(err));
});

// POST /authentication/login
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'invalid credentials.' });
      }
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (passwordCorrect) {
        const { _id, email, name } = user;
        const payload = { _id, email, name };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: '6h'
        });
        res.json({ authToken: authToken });
      } else {
        res.status(401).json({ message: 'invalid credentials.' });
      }
    })
    .catch((err) => next(err));
});

// GET /authentication/verify
router.get('/verify', routeGuard, (req, res, next) => {
  console.log(req.payload);
  res.json(req.payload);
});

module.exports = router;
