var express	= require('express'),
	router = express.Router();
	// connection = require('./connect.js');

	router.get('/register', function(req, res){
		var x ='';
		res.render('register', { s : 's'}); 
	});
	// connection.connect();	

	// connection.end();

	module.exports = router;