let myFont;
let delphE;

let myInfo;
let myButton;
let myAudio;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  myAudio = loadSound("./assets/audio/home.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;"
  );

  let myText;
  myText = createElement("h1");
  myText.html(
    "HEY!" +
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYOU LOOK" +
      "<br /> <u> INTERESTING </u>, LET ME" +
      "</br> KNOW YOU&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBETTER"
  );
  myText.style(
    "position:absolute;  left: 50px; translate(-50%,-50%); top: 150px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 80px;"
  );

  myInfo = createImg("./assets/images/Asterisco.svg");
  myInfo.size(windowWidth / 10, windowHeight / 10);
  myInfo.position(470, 410);
  myInfo.attribute("draggable", false);

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
  strokeWeight(2);

  fill(255);
  rect(290, 200, 60, 95, 30);
  //iris
  let x2 = constrain(mouseX, 295, 315);
  let y2 = constrain(mouseY, 205, 250);
  fill(0);
  rect(x2, y2, 30, 40, 25);

  fill(255);
  rect(240, 200, 60, 95, 30);
  //iris
  let x = constrain(mouseX, 245, 265);
  let y = constrain(mouseY, 205, 250);
  fill(0);
  rect(x, y, 30, 40, 25);

  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  if (myAudio.isPlaying() === false) {
    myAudio.play();
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function nextPage() {
  window.open("02-Name.html", "_self");
}
//Da aggiungere al link: /2022-group-project-group04/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
}
