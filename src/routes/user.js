// third party imports
const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController.js");

// Define routes
router.post("/register", registerController.handleNewUser);

module.exports = router;
