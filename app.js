var express = require('express'),
	request = require('request'),
	app     = express()

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render('home');
});

app.listen(3000, function(req,res){
	console.log('Website on port 3000!!');
});
