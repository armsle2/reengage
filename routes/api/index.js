const router = require("express").Router();
const rewards = require("./rewards-api");
const surveys = require("./surveys-api");
const customers = require("./customers-api");
const companies = require("./companies-api");


// Book routes
router.use("/rewards", rewards);
router.use("/surveys", surveys);
router.use("/customers", customers);
router.use("/companies", companies);



module.exports = router;
