// third party imports
const express = require("express");
const router = express.Router();
const path = require("path");

const authController = require("../controllers/authController.js");

// Define routes
router.post("/auth", authController.authorizeNewUser);

module.exports = router;
