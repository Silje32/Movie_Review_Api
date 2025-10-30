const express = require("express");
const router = express.Router();

// Controller functions
const {
  postReviews,
  getReviewsByMovieId,
} = require("../controllers/reviewsController");

// Define routes
router("/:id")
  .post(reviewController.postReviews)
  .get(reviewController.getReviewsByMovieId);

module.exports = router;
