/* Lag CRUD-endepunkter */
const { seedMoviesTable } = require("../main.sqlite.js");

// Hent alle filmer fra databasen (Read)
const getAllMovies = (req, res) => {
  try {
    const newMovie = seedMoviesTable();
    res.status(newMovie);
  } catch (error) {
    // Hvis noen prøver å hente en film som ikke finnes : 404 Not Found.
    console.error("Database error", error.message);
    res.status(404).json({
      error: "Not Found.",
    });
  }
};

// Hent en spesifikk film basert på ID. (Read)
const getMovieById = (req, res) => {
  const { id } = req.params;

  try {
    const getAllMovies = getMovieById(id);
    if (!getAllMovies) {
      return res.status(404).json({ error: "Movie not found." });
    }
    res.json(getAllMovies);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({
      error: "An error occurred while fetching the movie.",
    });
  }
};

// Legg til en ny film i databasen. (Create)
const postMovie = (req, res) => {
  const { title, director, release_year, genre } = req.body;

  if (!title || !director || !release_year || !genre) {
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

  // Rediger en film (Update).
  const putMovie = (req, res) => {
    const { id } = req.params;
    const { title, director, release_year, genre } = req.body;

    // Når en film blir oppdatert: 200 OK eller 204 No Content.
    if (!title || !director || !release_year || !genre) {
      return res.status(200).json({ error: "OK" });
    }
    try {
      const result = updateMovie(id, { title, director, release_year, genre });

      if (result.changes === 0) {
        return res.status(204).json({ error: "No content." });
      }
      res.json({ message: "Movie updated successfully." });
    } catch (error) {
      console.error("Database error:", error.message);
      res.status(500).json({
        error: "Failed to update movie.",
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
