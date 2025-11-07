/* Seeding Movies table */
function seedMoviesTable({ id, title, director, release_year, genre }) {
  const insert = db.prepare(
    `INSERT INTO Movies (id, title, director, release_year, genre) 
     VALUES (?, ?, ?, ?, ?)`
  );
  return insert.run({ id, title, director, release_year, genre });
}

/* Seeding Reviews table */
function seedReviewsTable({ id, movieId, reviewAuthor, reviewText, rating }) {
  const insert = db.prepare(
    `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
  );
  return insert.run({ id, movieId, reviewAuthor, reviewText, rating });
}

module.exports = {
  seedMoviesTable,
  seedReviewsTable,
};
