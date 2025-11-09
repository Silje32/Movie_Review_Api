/* Lag CRUD-endepunkter */
const { seedReviewsTable } = require("../main.sqlite.js");

// Legg inn en review.
const postReview = (req, res) => {
  const { movieId, reviewAuthor, reviewText, rating } = req.body;
  if ((!movieId || !reviewAuthor, !reviewText, !rating)) {
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

// Hent alle reviews for en spesifikk film
const getReviewsByMovieId = (req, res) => {
  if ((!title || !director, !release_year, !genre)) {
    return res
      .status(400)
      .json({ error: "Title, director, release year and genre are required." });
  }
  try {
    const newReview = seedReviewsTable({
      title,
      director,
      release_year,
      genre,
    });
    res.status(201).json({
      message: "Review created successfully.",
      review: {
        id: newReview.lastInsertRowid,
        title,
        director,
        release_year,
        genre,
      },
    });
  } catch (error) {
    console.error("Error creating review:", error.message);
    res.status(500).json({
      error: "An error occurred while creating the review.",
    });
  }
};

module.exports = {
  postReview,
  getReviewsByMovieId,
};

/* Når man har laget en controller må man også lage en route */
