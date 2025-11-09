// imports
// first party imports
const {
  getAllMovies,
  getMovieById,
  postMovie,
  putMovie,
} = require("../controllers/moviesController.js");

// third party imports
const express = require("express");
const router = express.Router();

// Define routes
router
  .route("/")
  .get(moviesController.getAllMovies)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get(moviesController.getMovieById)
  .put(moviesController.updateMovie);

module.exports = router;
