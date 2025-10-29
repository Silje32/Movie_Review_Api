const express = require("express");
const router = express.Router();

// Controller functions
const {
  postReviews,
  getReviewsByMovieId,
} = require("../controllers/reviewsController");

// Define routes
router.post("/movies/:id/reviews", postReviews);
router.get("/movies/:id/reviews", getReviewsByMovieId);

module.exports = router;
