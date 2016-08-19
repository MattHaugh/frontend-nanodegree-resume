/*
Cool Beans

 $("#main").append("Matt Haugh");

 var awesomeThoughts = "I am Matt Haugh and I am AWESOME!"

 var realThoughts = awesomeThoughts.replace("AWESOME", "Okay I guess");

$("#main").append(realThoughts);
var str = "audacity";

var str2 = str.slice(1);

var str3 = str2.replace(/u/i, "U"); 



console.log(str3);
 */
 var skills = ["Java Experience", " C++ Experience", " JavaScript Experience", " Dish Washing" , " Food Prep"];
 var bio = {
 	"name" : "Matt Haugh",
	"role" : "Will code for Money",
	"contact" : {
		"mobil": "555-555-555",
		"email": "haughMatt@gmail.com" ,
		"twitter": "@Matthaugh",
		"github": "https://github.com/MattHaugh"
	},
	"skills" : skills,
	"photo" : "images/fry.jpg",
	"welcome" : "Welcome to my Resume, I hope to fill it out a little more before it really gets used."
};

 var work = {"name":"Weddings by the Pond"};

 work.position = "Dish Washer";
 work.years = "2014-2015";
 work.city = "Blue Bell";

 var education = {};

 education["school"] = "Wissahickon High School";
 education["years"] = "2009-2013";
 education["city"] = "Blue Bell"

 var formattedName = HTMLheaderName.replace("%data%", "Matt Haugh");
 var formattedRole = HTMLheaderRole.replace("%data%","Will Code for Money");

 var formattedPic = HTMLbioPic.replace("%data%", bio.photo);
 var formattedMobil = HTMLmobile.replace("%data%", bio.contact.mobil);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
 var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
 var formattedWelcome =  HTMLwelcomeMsg.replace("%data%", bio.welcome);
 var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#main").append(formattedWelcome);
$("#main").append(formattedPic);
$("#main").append(formattedMobil);
$("#main").append(formattedTwitter);
$("#main").append(formattedEmail);
$("#main").append(formattedGithub);
$("#main").append(HTMLskillsStart);
$("#main").append(formattedSkills);

$("#main").append(work.position);
$("#main").append(education["school"]);
