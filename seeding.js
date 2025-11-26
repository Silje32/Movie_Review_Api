const db = require("./database");

/* Seeding Movies table */
db.prepare(
  `INSERT INTO Movies (id, title, director, release_year, genre) 
     VALUES (?, ?, ?)`
).run();

/* Seeding Reviews table */
db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run();

console.log("Seeding completed.");
