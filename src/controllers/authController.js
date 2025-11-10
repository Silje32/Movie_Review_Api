// imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

require("dotenv").config();

// Database
/* 
const usersDB = {
  users: require("../model/users.json"),
  SetUsers: function (data) {
    this.users = data;
  },
};
*/

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = usersDB.users.find(
    (person) => person.username === username
  );

  if (!foundUser) return res.sendStatus(401);
  ({ message: "Unauthorized" });
  const match = await bcrypt.compare(password, foundUser.password);
};

const accessToken = jwt.sign(
  { username: foundUser.username },
  process.env.ACCESS_TOKEN_SECRET,
  { expiresIn: "30m" }
);

const refreshToken = jwt.sign(
  { username: foundUser.username },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: "1d" }
);

res.json({ success: `User ${username} logged in!` });

module.exports = { handleNewUser };
