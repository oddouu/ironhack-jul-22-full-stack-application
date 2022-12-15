const jwt = require('jsonwebtoken');

const encodeJwt = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d'
  });
};

module.exports = encodeJwt;
