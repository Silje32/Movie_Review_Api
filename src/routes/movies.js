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
  .get("/movies", "moviesController", getAllMovies)
  .post("/postMovies", "moviesController", postMovie);

router
  .route("/:id")
  .get("/findMovie", "moviesController", getMovieById)
  .put("/updateMovie", "moviesController", putMovie);

module.exports = router;
