'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { routeGuard } = require('../middleware/routeGuard');
const encodeJwt = require('../lib/encode-jwt');

const saltRounds = 10;

const validatePassword = (password) => {
  // return password && password.length > 8;
  // Verifying length is larger than 8 AND it contains a digit
  return password && password.length > 8 && /\d/g.test(password);
};

// POST /authentication/signup
router.post('/signup', (req, res, next) => {
  const { email, password, name } = req.body;
  if (validatePassword(password)) {
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
        const authToken = encodeJwt(user);
        res.json({
          user: user,
          authToken
        });
      })
      .catch((err) => next(err));
  } else {
    next(new Error('Password is too short.'));
  }
});

// POST /authentication/login
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: 'invalid credentials.' });
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, email, name } = foundUser;
        const user = { _id, email, name };
        const authToken = encodeJwt(user);
        res.json({
          user,
          authToken: authToken
        });
      } else {
        res.status(401).json({ message: 'invalid credentials.' });
      }
    })
    .catch((err) => next(err));
});

// GET /authentication/verify
router.get('/verify', routeGuard, (req, res, next) => {
  const { _id, email, name } = req.payload;
  const user = { _id, email, name };
  const authToken = encodeJwt(user);
  res.json({ user, authToken });
});

module.exports = router;
