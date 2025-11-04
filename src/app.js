// imports
const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./routes/movies.js");
const reviewsRoutes = require("./routes/reviews.js");
const db = require();

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
db.prepare("DROP TABLE IF EXISTS Movies").run();

db.prepare(
  `CREATE TABLE Movies
(
  `
).run();
console.log("Migration completed: Movies table created.");

// Create Reviews table
db.prepare("DROP TABLE IF EXISTS Reviews").run();

db.prepare(
  `CREATE TABLE Reviews
(
 `
).run();
console.log("Migration completed: Reviews table created.");

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
