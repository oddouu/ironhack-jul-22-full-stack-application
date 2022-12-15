'use strict';

const express = require('express');
const router = express.Router();

const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL
});

router.get('/imagekit-authentication', (req, res, next) => {
  const authenticationParameters = imagekit.getAuthenticationParameters();
  res.json(authenticationParameters);
});

module.exports = router;
