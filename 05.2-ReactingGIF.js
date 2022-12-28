// Sketch linked to index.html

const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser");
let parameter1 = url.searchParams.get("t1"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let AT = url.searchParams.get("AnswerTime");

let comment;
let myFont;
let delphE;
let nextLong;
let myHover;
let myButton;
let myGif;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  comment = loadImage("./assets/images/saw.svg");
  myGif = loadImage("./assets/gif/Bob.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;"
  );

  myButton = createImg("./assets/images/NextLong.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);
}

function draw() {
  background("#68F6FF");

  //OCCHI:
  fill(255);
  strokeWeight(2);
  rect(60, height - 90, 30, 45, 15);

  //iris
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);

  fill(255);
  rect(35, height - 90, 30, 45, 15);

  //iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //Return Hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  push();
  imageMode(CENTER);

  image(myGif, width / 2, height / 2.2, myGif.width / 1.1, myGif.height / 1.1);
  noFill();
  stroke("black");
  strokeWeight(2);
  rectMode(CENTER);
  rect(
    width / 2,
    height / 2 - 15.5,
    myGif.width / 1.1 - 1,
    myGif.height / 1.2,
    40
  );
  pop();

  //BALLOON
  if (frameCount > 70) {
    image(comment, 100, height - 140, 474 / 2, 121 / 2);
  }

  if (frameCount > 80 && frameCount < 110) {
    fill("#68F6FF");
    strokeWeight(2);
    rect(35, height - 90, 30, 45, 15);

    line(35, height - 65, 63, height - 65);
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function nextPage() {
  window.open(
    url.origin +
      "/05.3-ReactingGIF.html?currentUser=" +
      parameter0 +
      "&AnswerTime=" +
      AT +
      "&t1=" +
      parameter1 +
      "&t2=" +
      frameCount / 60,
    "_self"
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
  background("#68F6FF");
}
