let mySlider;
let mySlider2;
let mySlider3;

let myButton;

function setup() {
  let canvas = createCanvas(windowWidth - 50, windowHeight - 150);
  canvas.style(
    "border-radius: 10px; border-style: solid; border-color: black; margin-top:2%; margin-bottom:2%"
  );
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 8;
  canvas.position(x, y);
  background("white");

  mySlider = createElement("SVG");
  mySlider.style(
    "position:absolute; left: 50%;transform: translate(-50%,-50%); bottom: 5px; background-color: white; border-radius: 265px; border-style: solid;border-width: 2; "
  );
  mySlider.size(windowWidth - 50, 50);

  let myText;
  myText = createP("LET ME KNOW YOU BETTER");
  myText.style(
    "position:absolute;  right: 40px; translate(-50%,-50%); bottom: 30px; text-align: right; font-family:'orbitron'; font-size: 20px;"
  );

  mySlider2 = createElement("SVG");
  mySlider2.style(
    "position:absolute; left: 25px; bottom: 5px; text-align: center; transform: translate(0,-50%); background-color:#874CEA; border-radius: 265px; border-style: solid;border-width: 2; "
  );
  mySlider2.size(50, 50);

  let myText2;
  myText2 = createP("OKAY, LET'S GO!");
  myText2.style(
    "position:absolute;  left: 40px; translate(-50%,-50%); bottom: 30px; text-align: right; font-family:'orbitron'; font-size: 20px; color: white"
  );

  myButton = createImg("./assets/images/ButtonSlider.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(300, 55);
  myButton.position(0, windowHeight - 88);
  myButton.attribute("draggable", false);
}

function eye(x, y) {
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
  ellipse(12, 0, 12);
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

function mouseDragged() {
  if ((mouseY > windowHeight - 120, mouseX < windowWidth - 25)) {
    push();
    let mySize = map(mouseX, 0, width, 70, windowWidth - 70);
    mySlider2.size(mySize, 50);
    pop();
  }

  if ((mouseX < windowWidth - 25, mouseY > windowHeight - 150)) {
    push();
    let myPos = map(mouseX, 0, width, 0, windowWidth - 320);
    myButton.position(myPos, windowHeight - 88);
    pop();
  }

  if (mouseX > windowWidth - 50) {
    nextPage();
  }
}

function nextPage() {
  window.open("/02-Name.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 150);
  mySlider.size(windowWidth - 50, 50);
  myButton.position(myPos, windowHeight - 88);
}
