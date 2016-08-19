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
 var skills = ["Java Experience", "C++ Experience", "JavaScript Experience", "Dish Washing" , "Food Prep"];
 var contactinfo = ["555-555-555", "@Matthaugh", "haughMatt@gmail.com" , "https://github.com/MattHaugh"];
 var bio {"name" : "Matt Haugh",
	"role" : "Will code for Money",
	"contact" : contactinfo,
	"skills" : skills,
	"photo" : images/fry.jpg
	"welcome" : "Welcome to my Resume, I hope to fill it out a little more before it really gets used."
};
 var formattedName = HTMLheaderName.replace("%data%", "Matt Haugh");
 var formattedRole = HTMLheaderRole.replace("%data%","Will Code for Money");

 var formattedPic = HTMLbioPic.replace("%data%", bio.photo);
 var formattedMobil = HTMLmobil.replace("%data%", contactinfo[0]);
 var formattedTwitter = HTMLtwitter.replace("%data%", contactinfo[1]);
 var formattedEmail = HTMLemail.replace("%data%", contactinfo[2]);
 var formattedGithub = HTMLgithub.replace("%data%", contactinfo[3]);
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
$("#main").append(formattedSkills);
