function setup() {
  let canvas = createCanvas(windowWidth - 50, windowHeight - 150);
  canvas.style(
    "border-radius: 10px; border-style: solid; border-color: black; margin-top:2%; margin-bottom:2%"
  );
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 8;
  canvas.position(x, y);
  background("white");
}

function eye(x, y) {
  let d = 40;
  push();
  translate(x + 30, y + 10);
  strokeWeight(2);
  //ellipse(0, 0, d);
  beginShape();
  vertex(-30, 0);
  bezierVertex(-10, -25, 10, -25, 30, 0);
  bezierVertex(10, 25, -10, 25, -30, 0);
  endShape();

  stroke(0);
  strokeWeight(2);
  fill("#B0E080");
  let myAngle = atan2(mouseY - y, mouseX - x);
  rotate(myAngle);
  ellipse(7, 0, 25);
  fill(0);
  ellipse(6, 0, 10);
  pop();
}

function draw() {
  background(255);
  for (var i = 0; i < width; i += 80) {
    for (var j = 0; j < height; j += 80) {
      eye(i, j);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 150);
}
