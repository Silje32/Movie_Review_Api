/* Lag CRUD-endepunkter */
const { seedMoviesTable } = require("../main.sqlite.js");

// Hent alle filmer fra databasen
const getAllMovies = (req, res) => {
  if ((!title || !director, !release_year, !genre)) {
    return res
      .status(400)
      .json({ error: "Title, director, release year and genre are required." });
  }
  try {
    const newMovie = seedMoviesTable({
      title,
      director,
      release_year,
      genre,
    });
    res.status(201).json({
      message: "Movie created successfully.",
      movie: {
        id: newMovie.lastInsertRowid,
        title,
        director,
        release_year,
        genre,
      },
    });
    // Hvis noen prøver å hente en film som ikke finnes : 404 Not Found.
  } catch (error) {
    console.error("Error creating movie:", error.message);
    res.status(404).json({
      error: "Not Found.",
    });
  }
};

// Hent en spesifikk film basert på ID.
const getMovieById = (req, res) => {
  if ((!title || !director, !release_year, !genre)) {
    return res
      .status(400)
      .json({ error: "Title, director, release year and genre are required." });
  }
  try {
    const newMovie = seedMoviesTable({
      title,
      director,
      release_year,
      genre,
    });
    res.status(201).json({
      message: "Movie created successfully.",
      movie: {
        id: newMovie.lastInsertRowid,
        title,
        director,
        release_year,
        genre,
      },
    });
  } catch (error) {
    console.error("Error creating movie:", error.message);
    res.status(500).json({
      error: "An error occurred while creating the movie.",
    });
  }
};

// Legg til en ny film i databasen.
const postMovie = (req, res) => {
  const { title, director, release_year, genre } = req.body;

  if ((!title || !director, !release_year, !genre)) {
    return res
      .status(400)
      .json({ error: "Title, director, release year and genre are required." });
  }
  try {
    const newMovie = seedMoviesTable({
      title,
      director,
      release_year,
      genre,
    });
    // Når en film blir opprettet: 201 Created.
    res.status(201).json({
      message: "Movie created successfully.",
      movie: {
        id: newMovie.lastInsertRowid,
        title,
        director,
        release_year,
        genre,
      },
    });
    // Hvis noen sender inn en post uten title eller year: 400 Bad Request.
  } catch (error) {
    console.error("Error creating movie:", error.message);
    res.status(400).json({
      error: "An error occurred while creating the movie.",
    });
  }

  // Rediger en film
  const putMovie = (req, res) => {
    const { title, director, release_year, genre } = req.body;
    // Når en film blir oppdatert: 200 OK eller 204 No Content.
    if ((!title || !director, !release_year, !genre)) {
      return res.status(200).json({
        error: "Title, director, release year and genre are updated.",
      });
    }
    try {
      const newMovie = seedMoviesTable({
        title,
        director,
        release_year,
        genre,
      });
      res.status(201).json({
        message: "Movie created successfully.",
        movie: {
          id: newMovie.lastInsertRowid,
          title,
          director,
          release_year,
          genre,
        },
      });
    } catch (error) {
      console.error("Error creating movie:", error.message);
      res.status(500).json({
        error: "An error occurred while creating the movie.",
      });
    }
  };

  module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    putMovie,
  };
};
/* Når man har laget en controller må man også lage en route */
