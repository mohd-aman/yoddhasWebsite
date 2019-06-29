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
app.get('/contact', function(req,res){
	res.render("contact");
});
// Volunteer System
app.get('/volunteer/home', function(req,res){
	res.render("volunteer");
});
app.get('/volunteer/login', function(req,res){
	res.render("login");
});
// Support
app.get('/support/donate', function(req,res){
	res.render("donate");
});
app.get('/support/forum', function(req,res){  
	res.render("forum");
});
// News and Events
app.get('/newsandevents/upcomingevents', function(req,res){  
	res.render("upcomingevents");
});
app.get('/newsandevents/pastevents', function(req,res){  
	res.render("pastevents");
});
app.get('/newsandevents/newsandpublications', function(req,res){  
	res.render("newsandpublications");
});
// Healthy Living
app.get('/healthyliving/blog', function(req,res){  
	res.render("blog");
});
app.get('/healthyliving/hospital', function(req,res){  
	res.render("hospital");
});

// Dealing with Cancer
app.get('/dealingwithcancer/dosanddonts', function(req,res){  
	res.render("dosanddonts");
});
app.get('/dealingwithcancer/basiccancer', function(req,res){  
	res.render("basiccancer");
});
app.get('/dealingwithcancer/multiplemyeloma', function(req,res){  
	res.render("multiplemyeloma");
});
app.get('/dealingwithcancer/bonemarrowdonor', function(req,res){  
	res.render("bonemarrowdonor");
});
app.get('/dealingwithcancer/inspirations', function(req,res){  
	res.render("inspirations");
});
app.get('/dealingwithcancer/faq', function(req,res){  
	res.render("faq");
});
app.listen(3000, function(req,res){
	console.log('App on 3000');
});