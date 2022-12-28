// Sketch linked to secondary HTML page (page.html)

let urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter2 = url.searchParams.get("t2"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter3 = url.searchParams.get("t3"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter4 = url.searchParams.get("t4"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter0 = url.searchParams.get("currentUser");
let AT = url.searchParams.get("AnswerTime");

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(color("powderblue"));

  textSize(30);
  text(round(parameter1, 2), width / 2, height / 3);
  text(round(parameter2, 2), width / 2, height / 2);
  text(round(parameter3, 2), width / 2, height / 4);
  text(round(parameter4, 2), width / 2, height / 2.5);
  text(parameter0, width / 2, height / 5);
  text(AT, width / 2, height / 6);
}
