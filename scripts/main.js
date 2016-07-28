var image = document.querySelector("img");

image.onclick = function() {
	var mySrc = image.getAttribute("src");
	if(mySrc === "images/a_link_to_the_past.png"){
		image.setAttribute ("src", "images/a_link_to_the_past2.png");
	} else {
		image.setAttribute ("src", "images/a_link_to_the_past.png");
	}
}

var button = document.querySelector("button");
var heading = document.querySelector("h2");

function setUserName() {
	var name = prompt("Please enter your name.", "Enter your name here.");
	localStorage.setItem("name", name);
	heading.textContent = "Welcome, " + name;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	heading.textContent = "Welcome, " + storedName;
}

button.onclick = function() {
	setUserName();
}