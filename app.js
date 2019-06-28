var express = require('express');
var request = require('request');
var ejs = require('ejs');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'vendor')));


app.get('/', function(req, res){
	res.render("index");
});

app.get('/about', function(req,res){
	res.render("about");
});

app.listen(3000, function(req,res){
	console.log('App on 3000');
});