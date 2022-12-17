'use strict';

const express = require('express');
const imagekit = require('./../lib/imagekit');

const router = express.Router();

router.get('/imagekit-authentication', (req, res, next) => {
  const authenticationParameters = imagekit.getAuthenticationParameters();
  res.json(authenticationParameters);
});

module.exports = router;
