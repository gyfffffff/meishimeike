var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(String.'E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\index.html')
});

module.exports = router;
