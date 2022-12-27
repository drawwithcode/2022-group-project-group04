// Sketch linked to index.html

const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

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
  window.open(url.origin + "/05.2-ReactingGIF.html?t1=" + frameCount, "_self");
}
