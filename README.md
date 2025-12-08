# A Node.js REST API for managing movie reviews:

## API endpoints:

GET: /movies/
Get all the movies.

GET: /movies/:id
Get a movie with ID.

POST: /movies/
Post a new movie.

PUT: /movies/:id
Edit a movie.

POST: /movies/:id/reviews
Post a review.

GET: /movies/:id/reviews
Get all reviews for a movie.

## How to integrate SQLite:

1. In the terminal write: npm install better-sqlite3.
2. Check in package.json that the file is properly installed:
   "dependencies"
   "better-sqlite3"

## How to make a .env file:

1.  In the terminal write : npm install dotenv.
2.  Check that the package is installed as a dependency in package.json :
    "dependencies"
    "dotenv"
3.  In the root folder make a .env file.

## How to Authorize:

1.  In the terminal write: npm install jsonwebtoken.
2.  Check in package.json that the file is properly installed:
    "dependencies"
    "jsonwebtoken"
3.  Write the json webtokens in the .env file.

## How to make a cookie:

1.  In the terminal write: npm install cookie-parser.
2.  Check in package.json that the file is properly installed:
    "dependencies"
    "cookie-parser"

## How to Hash a password:

1.  In the terminal write: npm install bcrypt.
2.  Check in package.json that the file is properly installed:
    "dependencies"
    "bcrypt"
3.  Import bcrypt in the file you want to use it:
    const bcrypt = require("bcrypt");
4.  Make a req, res function and create a try catch block.
5.  Inside the try block make a hashedPwd await function.
    const hashedPwd = await bcrypt.hash(pwd,10);

## How to make a Json Web Token:

1. In the terminal write: node
2. In the terminal write: require("crypto").randomBytes(64).toString("hex") Press enter and the crypto package will make a web token for you.
3. Press Ctrl + C two times to get out of node.

## How to create a Database - Steps :

```sh
node db.js - Make a database file
node init.js - Make the tables
node seeding.js - Fills the tables with values
```

If you want to seed a file twice you have to comment out what you already have seeded.
