/* Lag CRUD-endepunkter */

const { seedMoviesTable } = require("../main.js");

const getAllMovies = (req, res) => {
  // Hent alle filmer fra databasen
  // Hvis noen prøver å hente en film som ikke finnes : 404 Not Found.
};

const getMovieById = (req, res) => {
  // Hent en spesifikk film basert på ID.
  //
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
  // Hvis noen sender inn en post uten title eller year: 400 Bad Request.
  // Når en film blir opprettet: 201 Created.

  const putMovie = (req, res) => {
    // Rediger en film
    // Når en film blir oppdatert: 200 OK eller 204 No Content.
  };

  module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    putMovie,
  };
};
/* Når man har laget en controller må man også lage en route */
