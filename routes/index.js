var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // next();	
});

router.get('/register', function(req, res){
		var x ='';
		res.render('register', { s : 's'}); 
	});

module.exports = router;
