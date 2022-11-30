function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  stroke("black");
  fill(255);
  ellipse(width / 2 - 100, height / 2, 200, 300);
  ellipse(width / 2 + 100, height / 2, 200, 300);

  let xc = constrain(mouseX, width / 2 - 150, width / 2 - 50);
  let xs = constrain(mouseY, height / 2 - 75, height / 2 + 100);
  fill(0);
  ellipse(xc, xs, 100, 150);
  ellipse(xc + 200, xs, 100, 150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
