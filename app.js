const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MovieList');

app.use(bodyParser.json());
const movieRoutes = require('./routes/movieroutes.js');
app.use(movieRoutes);

app.use(function (err, request, response, next) {
  return response.status(500).send('Uh oh something went wrong! ' + err);
});

// Set our port to server the application on
const PORT = 3001;

// Tell our instance of express to listen to request made on our port
app.listen(PORT, function (err) {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
