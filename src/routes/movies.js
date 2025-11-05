// imports
// first party imports
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviesController.sqlite");

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
  .put(moviesController.updateMovie)
  .delete(moviesController.deleteMovie);

module.exports = router;
