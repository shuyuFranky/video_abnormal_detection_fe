var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/resData', function(req, res, next) {
  var files = fs.readFileSync(__dirname + '/../../output/openmax_reject_list.json', 'utf-8');
  var o = JSON.parse(files);
  res.send(o);
})

module.exports = router;
