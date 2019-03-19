const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const server = express();
const port = process.env.PORT || 3000;

// Middleware
server.use(logger('dev'));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Routes
server.use('/', indexRouter);

server.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handler
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message
  });
});

server.listen(port, () => console.log(`Express server is listening on port:${port}`));
