// Sketch linked to index.html

const urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1");
let counter1 = JSON.parse(parameter1);
let para2 = url.searchParams.get("t2");
let count2 = JSON.parse(para2);
let uName = url.searchParams.get("currentUser");
let myUser = JSON.parse(uName);

let comment;
let myFont;
let delphE;
let nextLong;
let myHover;
let myButton;
let myGif;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  comment = loadImage("./assets/images/Job.svg");
  myGif = loadImage("./assets/gif/Moms.gif");
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
  background("#8261FF");

  //OCCHI:
  fill(255);
  strokeWeight(2);
  rect(60, height - 90, 30, 45, 15);

  //iris
  let x2 = constrain(mouseX, 62, 73);
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
    image(comment, 100, height - 140, 413.5 / 2, 121 / 2);
  }

  if (frameCount > 70) {
    strokeWeight(2);
    fill("#8261FF");

    rect(60, height - 90, 30, 20, 15, 15, 0, 0);
    rect(35, height - 90, 30, 20, 15, 15, 0, 0);
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function nextPage() {
  window.open(
    url.origin +
      "/05.4-ReactingGIF.html?currentUser" +
      myUser +
      "&t1=" +
      counter1 +
      "&t2=" +
      count2 +
      "&t3=" +
      frameCount / 60,
    "_self"
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
  background("#8261FF");
}
