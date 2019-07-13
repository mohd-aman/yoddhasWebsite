var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
})

// passport local mongoose will do hashing and protect your password
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);