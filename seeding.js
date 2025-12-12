const Database = require("better-sqlite3");
const db = Database("database.db", { verbose: console.log });
db.pragma("foreign_keys = ON");

/* Seeding Movies table */
/* db.prepare(
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
/* db.prepare(
  `INSERT INTO Reviews (id, movieId, reviewAuthor, reviewText, rating)
      VALUES (?, ?, ?, ?, ?)`
).run("1", "1", "Alice", "An amazing movie about hope and friendship.", 4);

 */ const reviewValues = [
  /*
  [
    "2",
    "1",
    "Bob",
    "A story about hope, friendship, and perseverance against overwhelming odds",
    4,
  ],
  [
    "3",
    "1",
    "Charlie",
    "It is an extraordinary tale of hope, friendship and survival inside a maximum security prison.",
    4,
  ],
  [
    "4",
    "2",
    "Diana",
    "A chilling portrait of the Corleone family´s rise and near fall from power in America.",
    2,
  ],
  ["5", "2", "Ethan", "Exploring themes of power and moral decay.", 4],
  [
    "6",
    "2",
    "Fiona",
    "Epic tale of family, crime, corruption, and the Immigrant experience in America.",
    4,
  ],
  ["7", "3", "George", "Dark, complex and unforgettable.", 4],
  [
    "8",
    "3",
    "Hannah",
    "The Dark Knight succeeds not just as an entertaining comic book film, but as a richly thrilling crime saga.",
    4,
  ],
  [
    "9",
    "3",
    "Ian",
    "This movie is filled with lots of emotions. It has such great characters and of course the dialogs are so good. The performances are incredible.",
    5,
  ],
  [
    "10",
    "4",
    "Jane",
    "Brilliant and brutal, funny and exhilarating, jaw-droppingly cruel and disarmingly sweet.",
    4,
  ],
  [
    "11",
    "4",
    "Chris",
    "Pulp Fiction is comic and grim, sun-soaked and shadowy, tender and blunt.",
    3,
  ],
  [
    "12",
    "4",
    "Marius",
    "Every element of the bizarre, dizzying journey is carefully conceived and executed to take its viewers into the darkest recesses of life, then, with a wink and a laugh, set them free.",
    3,
  ],
  ["13", "5", "Amalie", "It´s the greatest movie ever made!.", 10],
  [
    "14",
    "5",
    "Sofie",
    "Forrest is a character who teaches by being. He doesn´t try to change people. He simply stays kind. In a world full of noise, his presence is what stays with you. His story isn´t about triumph in the traditional sense, it´s about resilience, and about loving people even when they don´t love you back the way you expect.",
    10,
  ],
  [
    "15",
    "5",
    "Alex",
    "The movie teaches you so much about life and the meaning of it. That life isn´t as bad as most people make it seem. That an innocent man can impact so many lives with his innocence. The meaning of the movie is that everyone needs to have a better outlook on life.",
    10,
  ], */
  [
    "17",
    "6",
    "Amanda",
    "Delivers twists that fit the evolving context of the story it´s creating and commandingly wins your attention enough to not turn you off. While it may not seem like it, there is a point and a light at the end of the tunnel to this maze.",
    3,
  ],
  [
    "18",
    "6",
    "Eric",
    "This film must be revisited, talked about, analyzed, and rewatched again and again. It will surely grow upon each viewing, but it proves instantly enthralling the first time",
    3,
  ],
  ["19", "6", "Gabriel", "Confusing nightmare.", 1],
  ["20", "7", "Nora", "The Matrix is spectacular.", 5],
  [
    "21",
    "7",
    "David",
    "The Matrix is a magical and fantastic showcase of how to make a visually stunning action film. I don´t think you can find any better movie in this genre. The actors performance are OK, but where they win your heart is by being cool and tough",
    5,
  ],
  ["22", "7", "Andreas", "Hot damn what a good movie!.", 5],
  [
    "23",
    "8",
    "Johannes",
    "Solid acting, amazing direction, and elaborate production design make Fight Club a wild ride.",
    4,
  ],
  ["24", "8", "Lena", "BANGER film, nuff said.", 4],
  [
    "25",
    "8",
    "Steffen",
    "Pitt dominates the screen every second he´s on it, and it simultaneously represents his weirdest, funniest and most charismatic role of his career.",
    3,
  ],
  [
    "26",
    "9",
    "Marius",
    "A blood and thunder finale that takes the viewer into a conflict of (quite literally) Middle-Earth shattering dimensions. If anything, Peter Jackson and his collaborators try to do too much with the final book of J.R.R. Tolkien´s fantasy trilogy",
    3,
  ],
  [
    "27",
    "9",
    "Betina",
    "Peter Jackson´s place in cinematic history is cemented with The Return of the King and now Star Wars seems like a film made a long time ago in a galaxy far, far away.",
    5,
  ],
  [
    "28",
    "9",
    "Eivind",
    "Viggo Mortensen´s Aragorn is the good king of the title, and while the actor may look fetching in a crown and cloak, he doesn´t have half of the gravitas of Sean Bean´s Boromir in the first film.",
    4,
  ],
  ["29", "10", "Jørgen", "One of the best sci-fi movies ever made.", 5],
  [
    "30",
    "10",
    "Emil",
    "Humbling and epic in scope, designed and conceptualised brilliantly, but a tad too stand-off-ish emotionally. While the father-daughter dynamic works in parts, the Cooper-Brand relationship is never given the right treatment and collapses.",
    3,
  ],
  [
    "31",
    "10",
    "Mariann",
    "Scientists will debate, theologians will contemplate, philosophers will wonder, and cinema lovers will bask in the glory of another remarkable Christopher Nolan achievement.",
    4,
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
