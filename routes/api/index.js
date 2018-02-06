const router = require("express").Router();
const rewards = require("./rewards-api");
const surveys = require("./surveys-api");
const users = require("./users-api");

// Book routes
router.use("/rewards", rewards);
router.use("/surveys", surveys);
router.use("/users", users);

module.exports = router;
