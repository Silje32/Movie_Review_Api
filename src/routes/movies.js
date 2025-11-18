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
router.route("/").get(getAllMovies).post(postMovie);

router.route("/:id").get(getMovieById).put(putMovie);

module.exports = router;
