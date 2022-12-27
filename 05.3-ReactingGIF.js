// Sketch linked to index.html

const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1");
let counter1 = JSON.parse(parameter1);
let para2 = url.searchParams.get("t2");
let count2 = JSON.parse(para2);

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
  window.open(
    url.origin +
      "/05.4-ReactingGIF.html?t1=" +
      counter1 +
      "&t2=" +
      count2 +
      "&t3=" +
      frameCount,
    "_self"
  );
}
