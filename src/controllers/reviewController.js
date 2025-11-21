const db = require("../database/db");

/* Lag CRUD-endepunkter */

// Legg inn en review. (Create)
const postReview = (req, res) => {
  try {
    const { movieId, reviewAuthor, reviewText, rating } = req.body;

    const stmt = db.prepare(
      `INSERT INTO Reviews (movieId, reviewAuthor, reviewText, rating)
         VALUES (?, ?, ?, ?)`
    );
    const result = stmt.run(movieId, reviewAuthor, reviewText, rating);

    res.sendStatus(201).json({ id: result.lastInsertRowid });
  } catch (error) {
    console.error("Database error:", error.message);
    res.sendStatus(500);
  }
};

// Hent alle reviews for en spesifikk film. (Read)
const getReviewsByMovieId = (req, res) => {
  try {
    const stmt = db.prepare(`SELECT * FROM REVIEWS WHERE id = ?`);
    const review = stmt.get(req.params.id);

    if (!movieId) {
      return res.sendStatus(404);
    }

    res.json(review);
  } catch (error) {
    console.error("Database error:", error.message);
    res.sendStatus(500).json({
      error: "An error occurred while fetching the review.",
    });
  }
};

module.exports = {
  postReview,
  getReviewsByMovieId,
};

/* Når man har laget en controller må man også lage en route */
