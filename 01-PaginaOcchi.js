function preload() {
  // put preload code here
}

let next;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // next = createButton("next");
  //next.style();
}

function draw() {
  background("white");

  stroke("black");
  strokeWeight(5);
  fill(255);
  ellipse(width / 2 - 100, height / 2, 200, 300);
  ellipse(width / 2 + 100, height / 2, 200, 300);

  let xc = constrain(mouseX, width / 2 - 130, width / 2 - 70);
  let xs = constrain(mouseY, height / 2 - 70, height / 2 + 70);
  fill(0);
  ellipse(xc, xs, 100, 120);
  ellipse(xc + 200, xs, 100, 120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*display: none;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 15px;
  padding-top: 23px;
  padding-bottom: 23px;
  border-radius: 100%;
  border-color: transparent;
  background-color: #e8dfd2;
  color: black;
  cursor: pointer;*/
