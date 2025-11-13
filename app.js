// imports
// first party
const moviesController = require("./src/controllers/moviesController.js");
const reviewController = require("./src/controllers/reviewController.js");
const moviesRoutes = require("./src/routes/movies.js");
const reviewsRoutes = require("./src/routes/reviews.js");
const seedMoviesTable = require("main.db");
const seedReviewsTable = require("main.db");

// third party
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const Database = require("better-sqlite3");
const dbPath = path.join(__dirname, "main.db");
const db = new Database(dbPath, { verbose: console.log });
console.log("Connected to the SQLite database and created a Table.");

// create express app
const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use("/routes/auth.js", authController);
app.use("/routes/user.js", registerController);
app.use("/routes/movies.js", moviesRoutes);
app.use("/routes/reviews.js", reviewsRoutes);
app.use("/main.db", seedMoviesTable);
app.use("/main.db", seedReviewsTable);

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

// stop server
process.on("SIGINT", () => {
  try {
    db.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Failed to close database connection:", error.message);
  } finally {
    process.exit(0);
  }
});

module.exports = app;
