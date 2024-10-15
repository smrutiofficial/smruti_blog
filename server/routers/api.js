const express = require("express");
const { getApiGuide } = require("../controllers/apiguide.controller.js");

const router = express.Router();

// API guide route
router.get("/", getApiGuide);

module.exports = router;
