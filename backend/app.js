var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');  
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var Student = require("./model/student")
var app = express();
var passportLocal=require("passport-local").Strategy;
var cors = require("cors");


setTimeout(() => {mongoose.connect('mongodb://mongo/myappdatabase')}, 1000)

// mongoose.connect("mongodb://localhost/petShop1");




app.use(session({
	secret : "samsonedwinkevinjoshua",
	resave : false,
	saveUninitialized :false
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

var companyRouter = require('./routes/company');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');
var loginRouter = require("./routes/login");
var councilRouter = require("./routes/council");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));



app.get("/ee",function(req,res){
  res.end("Temp");
  console.log("Test");
    
  console.log(req.body)
  // Student.find({},function(err,data){

  // 	var studentList = [];
  // 	data.forEach(function(s){
      
  // 		studentList.push(s.name);
  // 	});
  // 	res.json(studentList);
  // });
});

app.use(companyRouter);
app.use(councilRouter);
app.use(studentRouter);
app.use(loginRouter);

console.log((path.join(__dirname, 'frontend/dist/')));
app.use(express.static(path.join(__dirname, 'frontend/dist/')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*  Login and Signup st  */


  passport.use('local-login', new passportLocal({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password,done) { // callback with email and password from our form
  
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    Student.findOne({ 'local.username' :  username }, function(err, user) {
        // if there are any errors, return the error before anything else
        if (err)
          return done(err),false,{sucess: false , msg:""};
  
        // if no user is found, return the message
        if (!user)
          return done(null, false,{sucess:false,msg:"Invalid User"}) ; 
  
        // if the user is found but the password is wrong
        if (!user.validPassword(password))
        return done(null, false, {sucess:false,msg:"Invalid Passwoad"}); 
  
        // all is well, return successful user
        return done(null, user,{sucess:true,msg:""});
    });
  
  })); 

  passport.use('local-signup',new passportLocal({  // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password,done) {
  
    process.nextTick(function() {
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    console.log(req.body);
    Student.findOne({ 'username' :  username }, function(err, user) {
        // if there are any errors, return the error
        if (err)
        return done(err, false,{sucess:false,msg:""});
  
        // check to see if theres already a user with that email
        if (user) {
          return done(null, false,{sucess:false,msg:"Username used"});
        }else {
  
            // if there is no user with that email
            // create the user
            var newUser            = new Student();
  
            // set the user's local credentials
            newUser.username    = username;
            newUser.name   = req.body.name ;
            newUser.email       = req.body.email;
            newUser.password    = newUser.generateHash(password);
            console.log(req.body);
            // save the user
            newUser.save(function(err) {
                if (err)
                    throw err;
                  return done(null, user,{sucess:true,msg:""});
            });
        }
  
    });    
  
    });
  
  }
  
  ));

module.exports = app;

