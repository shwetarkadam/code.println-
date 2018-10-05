var app=angular.module('PetStore',[]);
app.controller("ContactController",function()
{
	this.usrName="";
	this.usrEmail="";
	this.usrSubject="";
	this.usrMessage="";
	this.reset=function()
	{
		this.usrName="";
		this.usrEmail="";
		this.usrSubject="";
		this.usrMessage="";
	};
});


$(document).ready(function(){
	



	$("#login-btn1").on("click",function(){
		$(".signup_container").fadeOut(function(){
			$(".login_container").fadeIn();
		});
		$("#login-btn1").fadeOut(function(){
			$("#signup-btn1").fadeIn();
		});
	});
	
	
	$("#signup-btn1").on("click",function(){
		$(".login_container").fadeOut(function(){
			$(".signup_container").fadeIn();
		});
		$("#signup-btn1").fadeOut(function(){
			$("#login-btn1").fadeIn();
		});
	});

	

	$(".chg").on("click",function(){
		$(this).find("form").slideToggle();
	})

	$("#settings").on("click",function(){
		$(".profile_container").fadeOut(function(){
			$(".setting_container").fadeIn();
		});
	});
	


});