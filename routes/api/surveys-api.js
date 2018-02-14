var express = require('express');
var router = express.Router();
const db = require('../../models');


//view all surveys
router.get('/', function(req, res) {
  db.Survey.find()
  .then(dbSurvey => res.json(dbSurvey))
  .catch(err => res.json(err));
});

//view one survey
//consider running a query to filter through customer id in survey document and then return all that match
router.get('/:id', function(req, res) {
  db.Survey.findOne({_id: req.params.id})
  .populate('reward')
  .populate('company')
  .then(dbSurvey => res.json(dbSurvey))
  .catch(err => res.json(err));
});
//set active survey for company - THIS WORKS!
router.post('/activate', function(req, res) {
  db.Company.updateOne({_id: req.body.companyId}, {$set: {activeSurvey: req.body.surveyId}})
  .then(function(dbActiveSurvey) {
    res.json(dbActiveSurvey)
  })
  .catch(function(err) {
      res.json(err);
  });
});
module.exports = router;
