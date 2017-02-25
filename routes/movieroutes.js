const express = require('express');
const router = express.Router();
const MovieModel = require('../models/MovieModel');

router.get('/movies', function (req, res, next) {
  MovieModel.find().exec().then(movies => {
    return res.json(movies);
  }).catch(err => {
    return next(err);
  });
});

router.get('/movies/:_id', function (req, res, next) {
  MovieModel.findById(req.params._id).exec()
  .then(movie => {
    return res.json(movie);
  }).catch(err => {
    return next(err);
  });
});

router.post('/movies', function (req, res, next) {
  const movie = new MovieModel({
    title: req.body.title,
    description: req.body.description,
    actors: req.body.actors
  });
  movie.save()
  .then(newMovie => {
    return res.json(newMovie);
  }).catch(err => {
    return next(err);
  });
});

router.put('/movies/:_id', function (req, res, next) {
  MovieModel.findById(req.params._id).exec()
  .then(movie => {
    movie.title = req.body.title || movie.title;
    movie.description = req.body.description || movie.description;
    movie.actors = req.body.actors || movie.actors;

    return movie.save();
  })
  .then(movie => {
    return res.json(movie);
  })
  .catch(err => {
    return next(err);
  });
});

router.delete('/movies/:_id', function (req, res, next) {
  MovieModel.findByIdAndRemove(req.params._id).exec()
  .then(movie => {
    return res.json(movie);
  }).catch(err => {
    return next(err);
  });
});

module.exports = router;
