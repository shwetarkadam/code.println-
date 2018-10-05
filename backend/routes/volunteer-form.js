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
        res.render("volunteer-form" , {event:data[0], volunteer_added: false});
	});
});



router.post('/:id/update', function(req, res){
    console.log(req.body);
    var volunteer_new = {
        name: req.body.name,
        email: req.body.email,
        rollno: req.body.rollno,
        phoneno: req.body.phoneno,
        password: req.body.password
    }

    Event.find({image:req.params.id},function(err,events){
		if( err)  {
            console.log("error in routes/volunteer-form/event/update");
            res.end("No such form");
        }
        event = events[0];
        console.log(event)
        
        var volunteers = event.volunteer;
        if (volunteers) {
            volunteers.push(volunteer_new)
        } else {
            volunteers = [volunteer_new]
        }

        event.set({ volunteer: volunteers });

        event.save(function (err, updatedevent) {
            if (err) return handleError(err);
            // res.send(updatedevent);
            res.render("volunteer-form" , {event:event, volunteer_added: true});
        });

    });
    
 });

module.exports = router;
