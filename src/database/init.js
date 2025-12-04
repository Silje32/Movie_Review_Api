const db = require("./db");

db.prepare(
  `CREATE TABLE IF NOT EXISTS Movies
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  release_year INTEGER NOT NULL,
  genre TEXT NOT NULL
)`
).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS Reviews
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  movieId INTEGER NOT NULL,
  reviewAuthor TEXT NOT NULL,
  reviewText TEXT NOT NULL,
  rating INTEGER NOT NULL,
  FOREIGN KEY (movieId) 
    REFERENCES Movies(id)
)`
).run();

console.log("Database initialized.");
