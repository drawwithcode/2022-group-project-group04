const urlString = window.location.href; //  Collect the url
let url = new URL(urlString); //  Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser"); //  user name
let AT = url.searchParams.get("AnswerTime"); //  start page permanence time: user response time

let cute;
let myFont;
let delphE;
let nextLong;
let myHover;
let myButton;
let myGif;

let voice;
let voiceText = "Yeah, they're VERY cute...";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  cute = loadImage("./assets/images/cute.svg");
  myGif = loadImage("./assets/gif/CuteAnimals.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  logo delphE
  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  //  next button
  myButton = createImg("./assets/images/NextLong.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  //  voice synthesizer
  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

//  voice synthesizer
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(1);
  voice.setPitch(1.3);
  voice.setLang("en-US");
  voice.speak(voiceText);
}

function draw() {
  background("#FFF44F");

  //  right eye
  fill(255);
  strokeWeight(1.5);
  rect(60, height - 90, 30, 45, 15);
  //  right iris
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);
  //  white-iris
  let x4 = constrain(mouseX, 63, 72);
  let y4 = constrain(mouseY, height - 87, height - 68);
  fill(255);
  rect(x4, y4, 10, 15, 15 / 2);

  //  left eye
  fill(255);
  rect(35, height - 90, 30, 45, 15);
  //  left iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);
  //  white-iris
  let x3 = constrain(mouseX, 37, 48);
  let y3 = constrain(mouseY, height - 87, height - 68);
  fill(255);
  rect(x3, y3, 10, 15, 15 / 2);

  //  return hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  //  GIF
  push();
  imageMode(CENTER);
  image(myGif, width / 2, height / 2.2, myGif.width / 1.1, myGif.height / 1.1);
  pop();

  //  balloon
  if (frameCount > 20) {
    image(cute, 100, height - 140, 413.5 / 2, 121 / 2);
  }
}

//  hover
function hovering() {
  myButton.style("filter:invert(1)");
}

//  go to next page
function nextPage() {
  window.open(
    "05.2-ReactingGIF.html?currentUser=" +
      parameter0 +
      "&AnswerTime=" +
      AT +
      "&t1=" +
      frameCount / 60,
    "_self"
  );
}

//  go to homepage
function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
  background("#FFF44F");
}
