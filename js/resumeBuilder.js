/*
Cool Beans

 $("#main").append("Matt Haugh");

 var awesomeThoughts = "I am Matt Haugh and I am AWESOME!"

 var realThoughts = awesomeThoughts.replace("AWESOME", "Okay I guess");

$("#main").append(realThoughts);
 */

 var formattedName = HTMLheaderName.replace("%data%", "Matt Haugh");

 var formattedRole = HTMLheaderRole.replace("%data%","Will Code for Money");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var str = "audacity";

var str2 = str.slice(2);

str2.concat + "U";
console.log(str2);