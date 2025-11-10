// Imports
const { seedReviewsTable } = require("../main.sqlite");
const { post } = require("../app.js");

/* Lag CRUD-endepunkter */

// Legg inn en review. (Create)
const postReview = (req, res) => {
  const { movieId, reviewAuthor, reviewText, rating } = req.body;
  if (!movieId || !reviewAuthor || !reviewText || !rating) {
    return res.status(400).json({
      error: "MovieId, reviewAuthor, reviewText and rating are required.",
    });
  }
  try {
    const newReview = seedReviewsTable({
      movieId,
      reviewAuthor,
      reviewText,
      rating,
    });

    // Når en anmeldelse legges til: 201 Created.
    res.status(201).json({
      message: "Review created successfully.",
      review: {
        id: newReview.lastInsertRowid,
        movieId,
        reviewAuthor,
        reviewText,
        rating,
      },
    });
  } catch (error) {
    console.error("Error creating review:", error.message);
    res.status(500).json({
      error: "An error occurred while creating the review.",
    });
  }
};

// Hent alle reviews for en spesifikk film. (Read)
const getReviewsByMovieId = (req, res) => {
  const { id } = req.params;

  try {
    const postReview = getReviewsById(id);
    if (!postReview) {
      return res
        .status(404)
        .json({ error: "Reviews not found for the movie." });
    }
    res.json();
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({
      error: "An error occurred while fetching the review.",
    });
  }
};
module.exports = {
  postReview,
  getReviewsByMovieId,
};

/* Når man har laget en controller må man også lage en route */
