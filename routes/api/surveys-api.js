var express = require('express');
var router = express.Router();
const db = require('../../models');


//view all surveys
router.get('/', function(req, res) {
  db.Survey.find()
  .then(dbSurvey => res.json(dbSurvey))
  .catch(err => res.json(err));
});
module.exports = router;
