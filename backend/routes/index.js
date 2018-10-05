var express = require('express');
var router = express.Router();
var Event  = require("../model/event");


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Event.find({},function(err,data){
		if( err)  console.log("error in routes/index/event/get");
		var eventList = [];
		data.forEach(function(s){
			
			eventList.push(s);
    });
    console.log(eventList);
    res.render('index', { title: 'Express', events:eventList  });

        
	});
});

router.get('/new', function(req, res, next) {
  console.log(req.body);
  res.render('partial-index', { title: 'Express' });
});

module.exports = router;
