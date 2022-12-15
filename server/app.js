'use strict';

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const mongoose = require('mongoose');
const baseRouter = require('./routes/base');
const quoteRouter = require('./routes/quote');
const authenticationRouter = require('./routes/authentication');
const { routeGuard } = require('./middleware/routeGuard');

const app = express();

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(
  cors({
    ...(process.env.CLIENT_APP_ORIGINS && {
      origin: process.env.CLIENT_APP_ORIGINS.split(',')
    }),
    credentials: true
  })
);
app.use(express.json());

app.use('/', baseRouter);
app.use('/quotes', quoteRouter);
app.use('/authentication', authenticationRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

const { NODE_ENV, PORT, MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Database connected to URI "${MONGODB_URI}"`);
    app
      .listen(Number(PORT), () => {
        console.log(`Server listening to requests on port ${PORT}`);
        if (NODE_ENV === 'development') {
          console.log(`Visit http://localhost:${PORT} to develop your app`);
        }
      })
      .on('error', (error) => {
        console.log('There was a server error.', error);
        process.exit(1);
      });
  })
  .catch((error) => {
    console.log(
      `There was an error connecting to the database "${MONGODB_URI}"`,
      error
    );
  });
