const Database = require("better-sqlite3");
const db = Database("database.db", { verbose: console.log });
db.pragma("foreign_keys = ON");

/* Seeding Movies table */
db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("1", "The Shawshank Redemption", "Frank Darabont", 1994, "Drama");

const insertsValues = [
  ["2", "The Godfather", "Francis Ford Coppola", 1972, "Crime"],
  ["3", "The Dark Knight", "Christopher Nolan", 2008, "Action"],
  ["4", "Pulp Fiction", "Quentin Tarantino", 1994, "Crime"],
  ["5", "Forrest Gump", "Robert Zemeckis", 1994, "Drama"],
  ["6", "Inception", "Christopher Nolan", 2010, "Sci-Fi"],
  ["7", "The Matrix", "The Wachowskis", 1999, "Sci-Fi"],
  ["8", "Fight Club", "David Fincher", 1999, "Drama"],
  [
    "9",
    "The Lord of the Rings: The Return of the King",
    "Peter Jackson",
    2003,
    "Fantasy",
  ],
  ["10", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi"],
];

for (const values of insertsValues) {
  db.prepare(
    `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
       VALUES (?, ?, ?, ?, ?)`
  ).run(...values);
}

/* db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("2", "The Godfather", "Francis Ford Coppola", 1972, "Crime");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("3", "The Dark Knight", "Christopher Nolan", 2008, "Action");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("4", "Pulp Fiction", "Quentin Tarantino", 1994, "Crime");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("5", "Forrest Gump", "Robert Zemeckis", 1994, "Drama");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("6", "Inception", "Christopher Nolan", 2010, "Sci-Fi");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("7", "The Matrix", "The Wachowskis", 1999, "Sci-Fi");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("8", "Fight Club", "David Fincher", 1999, "Drama");

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "9",
  "The Lord of the Rings: The Return of the King",
  "Peter Jackson",
  2003,
  "Fantasy"
);

db.prepare(
  `INSERT INTO Movies (Id, Title, Director, Release_year, Genre) 
     VALUES (?, ?, ?, ?, ?)`
).run("10", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi"); */

/* Seeding Reviews table */
db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating)
      VALUES (?, ?, ?, ?, ?)`
).run("1", "1", "Alice", "An amazing movie about hope and friendship.", 8);

const reviewValues = [
  [
    "2",
    "1",
    "Bob",
    "A story about hope, friendship, and perseverance against overwhelming odds",
    9,
  ],
  [
    "3",
    "1",
    "Charlie",
    "It is an extraordinary tale of hope, friendship and survival inside a maximum security prison.",
    8,
  ],
  [
    "4",
    "2",
    "Diana",
    "A chilling portrait of the Corleone family´s rise and near fall from power in America.",
    7,
  ],
  ["5", "2", "Ethan", "Exploring themes of power and moral decay.", 8],
  [
    "6",
    "2",
    "Fiona",
    "Epic tale of family, crime, corruption, and the Immigrant experience in America.",
    4,
  ],
  ["7", "3", "George", "Dark, complex and unforgettable.", 9],
  [
    "8",
    "3",
    "Hannah",
    "The Dark Knight succeeds not just as an entertaining comic book film, but as a richly thrilling crime saga.",
    8,
  ],
  [
    "9",
    "3",
    "Ian",
    "This movie is filled with lots of emotions. It has such great characters and of course the dialogs are so good. The performances are incredible.",
    10,
  ],
  [
    "10",
    "4",
    "Jane",
    "Brilliant and brutal, funny and exhilarating, jaw-droppingly cruel and disarmingly sweet.",
    7,
  ],
  [
    "11",
    "4",
    "Jane",
    "Pulp Fiction is comic and grim, sun-soaked and shadowy, tender and blunt.",
    6,
  ],
  [
    "12",
    "4",
    "Jane",
    "Every element of the bizarre, dizzying journey is carefully conceived and executed to take its viewers into the darkest recesses of life, then, with a wink and a laugh, set them free.",
    6,
  ],
];

for (const values of reviewValues) {
  db.prepare(
    `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating)
      VALUES (?, ?, ?, ?, ?)`
  ).run(...values);
}

/* db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run("5", "1", "Alice", "An amazing movie about hope and friendship.", 5);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "8",
  "2",
  "Bob",
  "A masterpiece of cinema with brilliant performances.",
  5
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run("3", "3", "Charlie", "An intense and thrilling superhero film.", 4);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "4",
  "4",
  "Diana",
  "A stylish and witty crime film with great dialogue.",
  5
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "5",
  "5",
  "Ethan",
  "A heartwarming story with unforgettable characters.",
  5
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "7",
  "6",
  "Fiona",
  "A mind-bending sci-fi thriller with stunning visuals.",
  4
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "10",
  "7",
  "George",
  "A revolutionary film that changed the sci-fi genre.",
  5
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "1",
  "8",
  "Hannah",
  "A dark and thought-provoking drama about identity.",
  4
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "9",
  "9",
  "Ian",
  "An epic fantasy adventure with breathtaking visuals.",
  5
);

db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating) 
     VALUES (?, ?, ?, ?, ?)`
).run(
  "10",
  "10",
  "Jane",
  "A visually stunning and emotionally powerful sci-fi film.",
  5
); */

console.log("Seeding completed.");
