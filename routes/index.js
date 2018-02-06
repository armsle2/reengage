const path = require("path");
var express = require('express');
var router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.get('*', function(req, res) {
  console.log(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
