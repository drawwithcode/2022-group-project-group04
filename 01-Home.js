let myFont;
let delphE;

let myInfo;
let myButton;
let myAudio;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  myAudio = loadSound("./assets/audio/home.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  logo delphE
  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px;"
  );

  //  text 
  let myText;
  myText = createElement("h1");
  myText.html(
    "HEY!" +
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYOU LOOK" +
      "<br /> <u> INTERESTING </u>, LET ME" +
      "</br> KNOW YOU&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBETTER"
  );
  myText.style(
    "position:absolute;  left: 50px; translate(-50%,-50%); top: 150px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 80px;"
  );

  //  star icon
  myInfo = createImg("./assets/images/Asterisco.svg");
  myInfo.style("position: absolute; cursor:pointer;");
  myInfo.size(windowWidth / 10, windowHeight / 10);
  myInfo.position(470, 410);
  myInfo.attribute("draggable", false);
  myInfo.mousePressed(info);

  //  start button
  myButton = createImg("./assets/images/ButtonNext.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);
}

function draw() {
  background("#FFF44F");
  strokeWeight(1.5);

  //  right eye
  fill(255);
  rect(290, 200, 60, 95, 30);
  //  right iris
  let x2 = constrain(mouseX, 295, 315);
  let y2 = constrain(mouseY, 205, 250);
  fill(0);
  rect(x2, y2, 30, 40, 25);

  // left eye 
  fill(255);
  rect(240, 200, 60, 95, 30);
  //  left iris
  let x = constrain(mouseX, 245, 265);
  let y = constrain(mouseY, 205, 250);
  fill(0);
  rect(x, y, 30, 40, 25);

  //  return hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  if (myAudio.isPlaying() === false) {
    myAudio.play();
  }
}

//  start audio
function mousePressed() {
  userStartAudio();
}

//  hover
function hovering() {
  myButton.style("filter:invert(1)");
}

//  go to next page
function nextPage() {
  window.open("02-Name.html", "_self");
}

//  go to info page
function info() {
  window.open("10-Info2.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
}
