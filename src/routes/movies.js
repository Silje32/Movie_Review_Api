const express = require("express");
const router = express.Router();

// routes

// Controller functions
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviesController");

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
