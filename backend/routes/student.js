var express = require('express');
var router = express.Router();
var Student = require("../model/student");

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


router.get("student/:id",function(req,res){

	Student.findById(req.params.id,(err,s)=>{
		obj={};
			obj.name = s.name;
			obj.email = s.email;
			obj.phone = s.phone;
			obj.username = s.username;
		res.json(obj);
	});
});


router.get("student/:id/resume",function(req,res){

	Student.findById(req.params.id,(err,data)=>{
		res.json(data.resume);
	});
});

router.post("/student",(req,res)=>{
	var newStudent =  new Student();
	newStudent.name = req.body.name;
	newStudent.username = req.body.username;
	newStudent.password = newStudent.generateHash(req.body.password);
	
	newStudent.save(function(err){
		if(err)
			return res.json({sucess:false,msg:""});
			res.json({sucess:true,msg:"Sucessful"});
	});

});

module.exports = router;
