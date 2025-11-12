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
router("/:id").get(getReviewsByMovieId).post(postReview);

module.exports = router;
