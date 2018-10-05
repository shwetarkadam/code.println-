var mongoose = require("mongoose");
var bcrypt   = require("bcrypt-nodejs");

var event = new mongoose.Schema({
        name:String,
        date:String,
        image: String,
        location: String,
        resources: {
        },
        volunteer: [],
        participants: [],
        permission: [],
        sponsors: [],
        analytics: [],
 });

module.exports = mongoose.model("Event" , event);
