// imports
// first party imports
const {
  postReview,
  getReviewsByMovieId,
} = require("../controllers/reviewController.sqlite.js");

// third party imports
const express = require("express");
const router = express.Router();

// Define routes
router("/:id")
  .post(reviewController.postReviews)
  .get(reviewController.getReviewsByMovieId);

module.exports = router;
