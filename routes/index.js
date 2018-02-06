const path = require("path");
var express = require('express');
var router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
