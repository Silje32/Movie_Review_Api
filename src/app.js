// imports
const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./routes/movies.js");
const reviewsRoutes = require("./routes/reviews.js");
/* 
const path = require("path");
const Database = require("better-sqlite3");
const dbPath = path.join(
  _dirname,
  "Database",
  "movies_controller.sqlite",
  "reviews_controller.sqlite"
);
const db = new Database(dbPath, { verbose: console.log });
console.log("Connected to the SQLite database and created a Table."); 
*/

// create express app
const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use("/routes/movies", moviesRoutes);
app.use("/routes/reviews", reviewsRoutes);

const PORT = process.env.PORT || 3500;
app.listen;

// Create Movies table
db.prepare(
  `CREATE TABLE IF NOT EXISTS Movies
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  release_year INTEGER NOT NULL,
  genre TEXT NOT NULL
)
  
`
).run();
console.log("Movies table created.");

// Create Reviews table
db.prepare(
  `CREATE TABLE IF NOT EXISTS Reviews
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  movieId INTEGER FOREIGN KEY AUTOINCREMENT,
  reviewAuthor: TEXT NOT NULL,
  reviewText: TEXT NOT NULL,
  rating: INTEGER NOT NULL
)
  
`
).run();
console.log("Reviews table created.");

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
