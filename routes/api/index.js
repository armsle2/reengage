const router = require("express").Router();
const rewards = require("./rewards-api");
const surveys = require("./surveys-api");
const users = require("./users-api");
const business = require("./business-api");


//  routes
router.use("/rewards", rewards);
router.use("/surveys", surveys);
router.use("/users", users);
router.use("/business", business);



module.exports = router;
