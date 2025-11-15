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
  .get("/movies", "insertMoviesTable", getAllMovies)
  .post("/postMovies", "insertMoviesTable", postMovie);

router
  .route("/:id")
  .get("/findMovie", "insertMoviesTable", getMovieById)
  .put("/updateMovie", "MoviesTable", putMovie);

module.exports = router;
