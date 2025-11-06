/* Lag CRUD-endepunkter */

const postReview = (req, res) => {
  // Legg inn en review.
  // Når en anmeldelse legges til: 201 Created.
};

const getReviewsByMovieId = (req, res) => {
  // Hent alle reviews for en spesifikk film
};

module.exports = {
  postReview,
  getReviewsByMovieId,
};

/* Når man har laget en controller må man også lage en route */
