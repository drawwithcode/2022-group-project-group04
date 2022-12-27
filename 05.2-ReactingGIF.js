// Sketch linked to index.html

const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let counter1 = JSON.parse(parameter1); // Transform the found parameter from string to JSON

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(color("lemonchiffon"));

  textSize(100);
  textAlign(CENTER);
  text(frameCount, width / 2, height / 2);
}

function mouseClicked() {
  // Open in the same window the following url:
  // [Initial URL]+[Secondary HTML page]+[Parameter]+[Value]
  // In this case:
  // http://127.0.0.1:5501/page.html?parameter=value
  window.open(
    url.origin + "/05.3-ReactingGIF.html?t1=" + counter1 + "&t2=" + frameCount,
    "_self"
  );
}
