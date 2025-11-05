// imports
// first party imports
const {
  postReviews,
  getReviewsByMovieId,
} = require("../controllers/reviewsController");

// third party imports
const express = require("express");
const router = express.Router();

// Define routes
router("/:id")
  .post(reviewController.postReviews)
  .get(reviewController.getReviewsByMovieId);

module.exports = router;
