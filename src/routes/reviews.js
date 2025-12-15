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
router.route("/:id/reviews").post(postReview);
router.route("/:id/reviews").get(getReviewsByMovieId);

module.exports = router;
