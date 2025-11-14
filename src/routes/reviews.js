// imports
// first party imports
const {
  getReviewsByMovieId,
  postReview,
} = require("../controllers/reviewController.js");

// third party imports
const express = require("express");
const router = express.Router();
const path = require("path");

// Define routes
router("/:id").get(getReviewsByMovieId).post(postReview);

module.exports = router;
