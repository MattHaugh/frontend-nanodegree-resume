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
 var skills = ["Java Experience", " C++ Experience", " JavaScript Experience", " Dish Washing" , " Food Prep"]; // BIO
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

 var work = {
 	"Jobs": [
 	{
 		"title" : "Dish Washer",
 		"employer" : "Weddings by the Pond" ,
 		"dates" : "July 2014 - Januaray 2016",
 		"location" : "Blue Bell, PA",
 		"description" : "Primarily washed dishes for a wedding catering company, but I also helped prepare and garnish food as well as landscaping projects at the same location." 
 	}
 	]
 };

 var education = { //Education
 	"schools": [
 	{
 		"name":"Wissahickon High School" ,
 		"city":"Blue Bell, PA"
 	}
 	],
 	"onlineCourses" : [
 	{
 		"title" : "JavaScrpit Basics",
 		"school" : "Udacity" ,
 		"dates" : "August, 2016",
 		"url" : "https://www.udacity.com/course/viewer#!/c-ud804/l-1946788554/m-2550568535"
 	}
 	]

 };

 var projects = {
 	"projects": [
 	{
 		"title" : "",
 		"dates" : "",
 		"description" : "" ,
 		"images" : ["",""] //THIS NEEDS TO BE AN ARRAY ONCE YOU KNOW WHAT TO DO WITH IT
 	}
 	]
 };

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
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);
$("#header").append(formattedMobil);
$("#header").append(formattedTwitter);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);

var formattedSkills;

var skillsNum = bio.skills.length;

console.log(skillsNum);

$("#header").append(HTMLskillsStart);

if(skillsNum > 0){

skillsNum = skillsNum -1;

formattedSkills = bio.skills[skillsNum].replace("%data%", bio.skills);

$("#header").append(formattedSkills);

console.log(bio.skills[skillsNum]);
};



//$("#main").append(work.position);
//$("#main").append(education["school"]);
