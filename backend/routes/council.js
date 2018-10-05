var express = require('express');
var router = express.Router();
var Council = require("../model/council");
var Event = require("../model/event");
/* GET home page. */


router.get('/council', function(req, res) {
    Council.find({},(err,foundEvent)=>{
        if(err)
            return res.json({sucess:false,msg:""});
        data = [{}];
        foundEvent.forEach((s)=>{
            obj = {};
            obj.name = s.name;
            obj._id = s._id;

            data.push(obj);
        });
        res.json(data);
    });
});


router.get("council/:id",function(req,res){

	Council.findById(req.params.id).populate("event").exec((err,s)=>{
        s.password =null;
		res.json(s);
	});
});


router.post("/council",(req,res)=>{
	var newCouncil =  new Council();

	newCouncil.name = req.body.name;
    newCouncil.email =  req.body.email;
    console.log(req.body);
    
    newCouncil.member = JSON.parse(req.body.member);
	newCouncil.password = newCouncil.generateHash(req.body.password);
	
	newCouncil.save(function(err){
		if(err)
			return res.json({sucess:false,msg:""});
			res.json({sucess:true,msg:"Sucessful"});
	});

});

router.get("council/:id/event",function(req,res){

	Council.findById(req.params.id).populate("event").exec((err,s)=>{
		res.json(s.event);
	});
});

router.get("council/:id/member",function(req,res){

	Council.findById(req.params.id,(err,s)=>{
		res.json(s.member);
	});
});

router.post("council/:id/event",function(req,res){

    Council.findById(req.params.id,(err,foundC)=>{
        obj={};
        obj.name = req.body.name;
        obj.email = req.body.email;
        obj.phone = req.body.phone;
        obj.por = req.body.por;
        obj.photo = req.body.photo;

        foundC.member.push(obj);

        foundC.save();
    });
});

router.post("council/:id/member",function(req,res){

    newEvent.data = req.body.data;
    newEvent.name = req.body.name;
    newEvent.place = req.body.place;
    newEvent.room = req.body.room;
    newEvent.time = req.body.time;
    newEvent.desc =req.body.dese;
    newEvent.cost= req.body.cost;
    newEvent.floor = req.body.floor;
    newEvent.perm.security = req.body.security;
    newEvent.perm.hod = req.body.hod;

    newCouncil.save(function(err){
        if(err)
            res.json({sucess:false,msg:""});
        res.json({sucess:"true",msg:"Sucessfull"});
    });
});


module.exports = router;
