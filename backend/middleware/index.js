// var Pet = require("../model/pet.js"),
//     Student =require("../model/student"),
//     request= require("request");


// module.exports = {
// 	isResumeOwner : (req,res,next)=>{
// 	  	if(req.isAuthenticated())
// 	  	{
// 	    	Student.findById(req.params.id,(err,foundStudent)=>{
// 	      		if(err){
// 	      			req.flash("Something went wrong,Please try again after sometime");
// 	        		res.redirect("back");
// 	      		}
// 	      		if(foundStudent && .author.id.equals(req.user._id))
// 	      		{
// 	        		next();
// 	      		}
// 	      		else{
// 	        		req.flash("error","Not Authorized to make the changes");
// 	        		res.redirect("back");
// 	      		}
// 	    	});
// 	  	}
// 	  	else{
// 	  		req.flash("error","You need to be logged in to do that !");
// 	    	res.redirect("back");
// 	  	} 
// 	},

// 	isPetOwner : (req,res,next)=>{
// 		if(req.isAuthenticated())
// 		{
// 	    	Pet.findById(req.params.id,(err,foundPet)=>{
// 		    	if(err)
// 		    	{
// 		    		req.flash("Something went wrong,Please try again after sometime");
// 		    		res.redirect("back");
// 		      	}
// 		      	if(foundPet && req.user._id.equals(foundPet.user.id))
// 		      	{
// 		        	next();
// 		      	}
// 		      	else
// 		      	{
// 		      		req.flash("error","Not Authorized to make the changes");
// 		        	res.redirect("back");
// 		      	}
// 	    	});
// 	  	}
// 	  	else{
// 	  		req.flash("error","You need to be logged in to do that !");
// 	    	res.redirect("back");
// 	  	}	  
// 	},


// 	isLoggedIn : (req, res, next)=>{
// 	    if(req.isAuthenticated()){
// 	        return next();
// 	    }
// 	    req.flash("error","You need to be logged in to do that !");
// 	    res.redirect("/signup");
// 	},
	
	
// 	captcha : (req,res,next)=>{
// 		 // g-recaptcha-response is the key that browser will generate upon form submit.
// 		 // if its blank or null means user has not selected the captcha, so return the error.
// 		 if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
// 		 // return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
// 			req.flash("error","Please select captcha");
// 	    	return res.redirect("/signup");
		 	
// 		 }
// 		// Put your secret key here.
// 		var secretKey = "6LefQDYUAAAAAARREgY9l9N7haon49YmziKffRMT";
// 		// req.connection.remoteAddress will provide IP address of connected user.
// 		var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
// 		// Hitting GET request to the URL, Google will respond with success or error scenario.
// 		request(verificationUrl,function(error,response,body) {
// 			if(error){
// 				req.flash("error","Something went wrong");
// 				return res.redirect("/signup");
// 			}
// 			body = JSON.parse(body);
// 	    	// Success will be true or false depending upon captcha validation.
// 	    	if(body.success !== undefined && !body.success) {
// 	    		req.flash("error","Invalid captcha");
// 	    		return res.redirect("/signup");
// 			}
// 			next();
// 		});
// 	},
// 	validEmail : (req,res,next)=>{
// 		kickbox.verify(req.body.email, function (err, response) {
// 			console.log(response.body);
// 			if(response.body.result === 'undeliverable' || response.body.role || response.body.disposable){
// 				req.flash("error","Email does not exist,Please enter a vaild email");
// 				return res.redirect("/signup");
// 			}
// 			next();
// 		});
// 	}
	
// };