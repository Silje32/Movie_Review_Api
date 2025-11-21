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
router.route("/").get(getAllMovies).post(postMovie).put(putMovie);

router.route("/:id").get(getMovieById);

module.exports = router;
