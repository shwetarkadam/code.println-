var express = require('express');
var router = express.Router();

var Event  = require("../model/event");


/* GET users listing. */
router.get('/:id', function(req, res, next) {
    console.log("req.params.id");
    Event.find({image:req.params.id},function(err,data){
		if( err)  {
            console.log("error in routes/volunteer-form/event/get");
            res.end("No such form");
        }
		console.log(data)
        res.render("participant-form" , {event:data[0], participant_added: false});
	});
});

router.post('/:id/update', function(req, res){
    console.log(req.body);
    
    var projects = 
    [
    req.body['project-0'],
    req.body['project-1'],
    req.body['project-2'],
    req.body['project-3'],
    req.body['project-4']]

    var skills = {
        'skill-0' : req.body['skill-level-0'],
        'skill-1' : req.body['skill-level-1'],
        'skill-2' : req.body['skill-level-2'],
        'skill-3' : req.body['skill-level-3'],
        'skill-4' : req.body['skill-level-4']
    }


    var noOfProjects = 0
    projects.forEach(function(element) {
        if (element.length > 0)
            noOfProjects += 1;
      });
      

    var  participant_new = 
    {
        name:   req.body.name,
        phoneno: req.body.phoneno ,
        email: req.body.email ,
        password: req.body.password ,
        inputCollege: req.body.inputCollege ,
        rollno: req.body.rollno ,
        'noOfProjects' : noOfProjects,
        'self-rate': req.body['self-rate-level-5'],
        skills: skills
    }
    Event.find({image:req.params.id},function(err,events){
		if( err)  {
            console.log("error in routes/parti-form/event/update");
            res.end("No such form");
        }
        event = events[0];
        console.log(event)
        
        var participants = event.participants;
        if (participants) {
            participants.push(participant_new)
        } else {
            participants = [participant_new]
        }

        event.set({ participants: participant_new });

        event.save(function (err, updatedevent) {
            if (err) return handleError(err);
            // res.send(updatedevent);
            res.render("participant-form" , {event:event, participant_added: true});
        });

    });
    
 });



 router.post('/:id/update', function(req, res){
    console.log(req.body);
    
    var projects = 
    [
    req.body['project-0'],
    req.body['project-1'],
    req.body['project-2'],
    req.body['project-3'],
    req.body['project-4']]

    var skills = {
        'skill-0' : req.body['skill-level-0'],
        'skill-1' : req.body['skill-level-1'],
        'skill-2' : req.body['skill-level-2'],
        'skill-3' : req.body['skill-level-3'],
        'skill-4' : req.body['skill-level-4']
    }


    var noOfProjects = 0
    projects.forEach(function(element) {
        if (element.length > 0)
            noOfProjects += 1;
      });
      

    var  participant_new = 
    {
        name:   req.body.name,
        phoneno: req.body.phoneno ,
        email: req.body.email ,
        password: req.body.password ,
        inputCollege: req.body.inputCollege ,
        rollno: req.body.rollno ,
        'noOfProjects' : noOfProjects,
        'self-rate': req.body['self-rate-level-5'],
        skills: skills
    }
    Event.find({image:req.params.id},function(err,events){
		if( err)  {
            console.log("error in routes/parti-form/event/update");
            res.end("No such form");
        }
        event = events[0];
        console.log(event)
        
        var participants = event.participants;
        if (participants) {
            participants.push(participant_new)
        } else {
            participants = [participant_new]
        }

        event.set({ participants: participant_new });

        event.save(function (err, updatedevent) {
            if (err) return handleError(err);
            // res.send(updatedevent);
            res.render("participant-form" , {event:event, participant_added: true});
        });

    });
    
 });

module.exports = router;
