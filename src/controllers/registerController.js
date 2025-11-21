// imports
const db = {
  users: require("../database/db"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const path = require("path");
const { set } = require("../../app");
const fsPromises = require("fs").promises;

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
    const duplicate = db.users.find((person) => person.username === user);
    if (duplicate) return res.sendStatus(409);
    try {
      const hashedPwd = await bcrypt.hash(password, 10);
      const newUser = {
        username: username,
        password: hashedPwd,
      };
      db.setUsers([...db.users, newUser]);
      await fsPromises.writeFile(
        path.join(__dirname, "..", "database", "db"),
        JSON.stringify(db.users)
      );
      console.log("db.users");
      return res.status(201).json({ message: `New user ${username} created!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
module.exports = { handleNewUser };
