const urlString = window.location.href; //  Collect the url
let url = new URL(urlString); //  Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser"); //  user name
let AT = url.searchParams.get("AnswerTime"); //  start page permanence time: user response time

let myFont;
let DYK;
let ButFirst;
let ChillDude;
let Rush;
let delphE;
let loading;

let voice;
let voiceText = [
  "Do you know that I am a PRO in classifying what kind of person you are? But first, let me check something about you...",
];

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  DYK = loadImage("./assets/images/DYK.svg");
  ButFirst = loadImage("./assets/images/ButFirst.svg");
  ChillDude = loadImage("./assets/images/ChillDude.svg");
  Rush = loadImage("./assets/images/Rush.svg");
  loading = loadImage("./assets/images/Loading.png");
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

  //  left eye
  fill(255);
  rect(35, height - 90, 30, 45, 15);
  //  left iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //  first balloon
  if (frameCount < 300 && frameCount > 20) {
    image(DYK, 100, height - 190, 420 / 2, 221 / 2);
  }

  //  second balloon
  if (frameCount < 600 && frameCount > 300) {
    image(ButFirst, 100, height - 140, 420 / 2, 146 / 2);
  }

  //  loading
  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount / 30);
  image(loading, 0, 0, 100, 100);
  pop();

  //  balloons
  if (frameCount > 610) {
    push();
    frameRate(15);
    //  difference mouseX and pmouseX --> if difference = 0 
    var difX = abs(mouseX - pmouseX);
    //  difference mouseY and pmouseY
    var difY = abs(mouseY - pmouseY);
    //  floor() approximates the speed
    var mySpeed = floor(difX + difY) / 10;
    //  ballons associated with each speed
    if (mySpeed === 0) {
      image(ChillDude, 100, height - 140, 535 / 2, 121 / 2);
    } else if (mySpeed > 10) {
      image(Rush, 100, height - 140, 461 / 2, 146 / 2);
    }
    pop();
  }
}

//  timeout in milliseconds
let myTimer = window.setTimeout(nextPage, 14000); 

//  go to next page
function nextPage() {
  window.open(
    "05-ReactingGIF.html?currentUser=" + parameter0 + "&AnswerTime=" + AT,
    "_self"
  );
}

//  go to homepage
function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#FFF44F");
}
