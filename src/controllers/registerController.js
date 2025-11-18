// imports
const bcrypt = require("bcrypt");

const path = require("path");
const fsPromises = require("fs").promises;

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
    const duplicate = usersDB.users.find((person) => person.username === user);
    if (duplicate) return res.sendStatus(409);
    try {
      const hashedPwd = await bcrypt.hash(password, 10);
      const newUser = {
        username: username,
        password: hashedPwd,
      };
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
module.exports = { handleNewUser };
