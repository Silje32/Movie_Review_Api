// imports
const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./routes/movies.js");
const reviewsRoutes = require("./routes/reviews.js");

// create express app
const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use("/movies", moviesRoutes);
app.use("/reviews", reviewsRoutes);

const PORT = process.env.PORT || 3500;
app.listen;

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
