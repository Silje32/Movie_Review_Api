// imports
// first party imports
const {
  getReviewsByMovieId,
  postReview,
} = require("../controllers/reviewController.js");

// third party imports
const express = require("express");
const router = express.Router();

// Define routes
router.route("/movies/reviews").post(postReview);
router.route("/movies/:id/reviews").get(getReviewsByMovieId);

module.exports = router;
