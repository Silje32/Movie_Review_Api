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
router("/:id")
  /* Hent alle reviews for en film */
  .get("/review", "reviewController", getReviewsByMovieId)
  /* Legg inn en reviews */
  .post("/createReview", "reviewController", postReview);

module.exports = router;
