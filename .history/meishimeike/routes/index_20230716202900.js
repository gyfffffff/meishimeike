var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(String.raw `E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\index.html`)
});

router.get('/dashboard',function(req, res, next){
  res.sendFile(String.raw `E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\dashboard.html`)
})

var idx = 0
router.get('/search0'+idx, function(req, res, next){
  res.send()
})

module.exports = router;
