var express = require('express');
var request = require('request');
var ejs = require('ejs');
var path = require('path');
// require for sending mail from contact form
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars',exphbs());


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'vendor')));


//body-parser
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());


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




app.post('/send',(req,res) => {
  // async..await is not allowed in global scope, must use a wrapper
async function main(){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'yoddhascontact@gmail.com', // generated ethereal user
      pass: 'Yoddhas@99' // generated ethereal password
    },
    tls:{
    	rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Yoddhas Contact" <yoddhascontact@gmail.com>', // sender address
    to: "Team@yoddhas.com,rashimandla@gmail.com", // list of receivers
     subject: `${req.body.name}`,
    replyTo: `${req.body.email}`,
    html:`<p>You have new contact request from Yoddhas Web</p><h3>Contact Detail</h3><ul><li>Name : ${req.body.name}</li><li>Email : ${req.body.email}</li><li>Subject : ${req.body.subject}</li></ul><h3>Message</h3>${req.body.message}`,
  });
 
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com
  res.render('contact');
   res.end();

}
main().catch(console.error);
});




app.listen(3000,(req,res) => {
	console.log('App on 3000');
});
