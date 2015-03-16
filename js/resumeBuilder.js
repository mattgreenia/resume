var bio = {
	"name": "Matthew Greenia",
	"role": "SharePoint Ninja",
	"contacts": {
		"mobile": "(404)202-9090",
		"email": "mattgreenia@me.com",
		"github": "mattgreenia",
		"twitter": "mattgreenia",
		"location": "Atlanta, GA"
	},
	"welcomeMsg": "my measure of success is hearing customers say wow.",
	"skills": [
	"GFX design", "SharePoint Developer", "Web Developer", "Corporate Communications"
	],
	"biopic": "images/mg.jpg"
}



var education = {
	"schools": [
	{
		"school": "Michigan State University",
		"location": "East Lansing, MI",
		"degree": "Bachelors",
		"major": "CS",
		"dates": "Long ago",
		"url": "https://msu.edu",
		"logo": "images/sparty.png"
		},
	{
		"school": "U.S. Naval War College",
		"location": "Newport, RI",
		"degree": "Primary PME",
		"major": "CS",
		"dates": "Long ago",
		"url": "https://www.usnwc.edu",
		"logo": "images/ega.png"
		},
	{
		"school": "USMC",
		"location": "Okinawa, Japan",
		"degree": "Platoon Leader School",
		"major": "Non-Commissioned Officer",
		"dates": "Long ago",
		"logo": "images/ega.png"
	}
	]
}

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Senior Business Manager",
		"location": "Atlanta, GA",
		"dates": "March 2007 - Present",
		"description": "Collaboration – Solution Design - Develop collaborative solutions | Data interaction | Operation Business Continuity Planning Every Quarter communicate to site and functional leaders location and logistics of OBCP.  Annually perform BC tabletop exercise | Graphic Design – Develop as needed graphical themes and supporting graphics to that effectively communicate in a highly illustrative media-rich manner.",
		"logo": "images/deathstar.png"
	},
	{
		"employer": "Cingular Wireless",
		"title": "IT Enterprise Solution Architecture Project Manager",
		"location": "Alpharetta, GA",
		"dates": "Sept 2004 - March 2007",
		"description": "Manage small to large project teams responsible for performing technology, capacity and application assessments; examining the impact and compatibility of new hardware, network and applications against current enterprise standards. | Technology Realization; Process to transform new technological concepts into functional roles and procedures. | Developed and maintain SharePoint web page for Enterprise Solution Architecture",
		"logo": "images/jack.png"
	},
	{
		"employer": "United States Marine Corps",
		"title": "Sergeant",
		"location": "Camp Pentilton, CA",
		"dates": "1988 - 1995",
		"description": "Leader of a platoon of Marines trained in Neo-ops (embassy hostage extraction). | Trained in Jungle, Artic and Desert combat and survival. | Led Marines to accomplish assigned missions during times of natural disasters and extremely adverse conditions. | Rated for the operation of vehicles from 1.5 tons to 10 tons. | Primary Marksmanship Instructor",
		"logo": "images/ega.png"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "SharePoint Ninja",
		"dates": "Oct 2014",
		"description": "Rockin SP for more years than I care to admit",
		"logo": "images/ninja.png"
	},
	{
		"title": "AT&T",
		"dates": "Dec 2014",
		"description": "Communication and Collaboration before Communication and Collabotation was 		corporate cool",
		"logo": "images/deathstar.png"
	},
	{
		"title": "USMC",
		"dates": "Feb 1988",
		"description": "Kickin and taking names",
		"logo": "images/ega.png"
	},
	]
}

// add bio info
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);


// skills list
function displaySkills() {
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
}
displaySkills();

// add employment history
function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedEmployer = formattedEmployer.replace("%logo%", work.jobs[job].logo);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

//display Projects (Encapsulated)
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	formattedTitle = formattedTitle.replace("%logo%", projects.projects[project].logo);
	$(".project-entry:last").append(formattedTitle);
		
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
				
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);		
	}
}

projects.display();

//add education
function displayEducation() {
	for (sch in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[sch].school);
		formattedSchool = formattedSchool.replace("%logo%", education.schools[sch].logo);
		$(".education-entry:last").append(formattedSchool);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
		$(".education-entry:last").append(formattedDegree);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
		$(".education-entry:last").append(formattedLocation);
	}
}

displayEducation();

//google map of locations
$("#mapDiv").append(googleMap);