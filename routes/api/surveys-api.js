var express = require('express');
var router = express.Router();
const db = require('../../models');


/* GET users listing. */
router.get('/', function(req, res) {
  db.Survey.find()
  .then(function(dbSurvey) {
    res.json(dbSurvey);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  });
});

module.exports = router;
