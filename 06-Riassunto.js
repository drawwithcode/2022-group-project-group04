// Sketch linked to secondary HTML page (page.html)

const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter2 = url.searchParams.get("t2"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter3 = url.searchParams.get("t3"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter4 = url.searchParams.get("t4"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let uName = url.searchParams.get("currentUser");

let a1 = JSON.parse(parameter1); // Transform the found parameter from string to JSON
let a2 = JSON.parse(parameter2); // Transform the found parameter from string to JSON
let a3 = JSON.parse(parameter3); // Transform the found parameter from string to JSON
let a4 = JSON.parse(parameter4); // Transform the found parameter from string to JSON
let myUser = JSON.parse(uName);

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(color("powderblue"));

  textSize(30);
  text(round(a1, 2), width / 2, height / 3);
  text(round(a2, 2), width / 2, height / 2);
  text(round(a3, 2), width / 2, height / 4);
  text(round(a4, 2), width / 2, height / 2.5);
  text("" + myUser, width / 2, height / 5);
}
