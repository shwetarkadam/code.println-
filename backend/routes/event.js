var express = require('express');
var router = express.Router();
var Student = require("../model/student");
var Event  = require("../model/event");


/* GET users listing. */
router.get('/:id', function(req, res, next) {
    Event.find({image:req.params.id},function(err,data){
		if( err)  {
            console.log("error in routes/event/event/get");
            res.end("No such form");
        }
		console.log(data)
        res.render("event" , {event:data[0]});
	});
});


router.get("/newEmpty",function(req,res){
	console.log("Test");
	console.log(req.body);

	var newEvent =  new Event();
	newEvent.name = "test1";

	newEvent.save(function(err){
		if(err)
			return res.json({sucess:false,msg:""});
			res.json({sucess:true,msg:"Created an empty new event"});
	});
});


router.get("/get",function(req,res){
	console.log("Test");
	console.log(req.body)
	Event.find({},function(err,data){
		if( err)  console.log("error in routes/event/get");
		var eventList = [];
		data.forEach(function(s){

			eventList.push(s);
		});
		res.json(eventList);

	});

});


router.get("/student",function(req,res){

	console.log("Test");

	console.log(req.body)
	Student.find({},function(err,data){

		var studentList = [];
		data.forEach(function(s){

			studentList.push(s.name);
		});
		res.json(studentList);
		// res.end("mp12");
	});
	// res.end("mp");

});

module.exports = router;
