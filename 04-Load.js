const urlString = window.location.href;
let url = new URL(urlString);

let parameter0 = url.searchParams.get("currentUser");
let AT = url.searchParams.get("AnswerTime");

let myFont;
let DYK;
let ButFirst;
let ChillDude;
let Rush;
let delphE;
let loading;

let voice;
let voiceText = [
  "Do you know that I am famous for my incredible talent in classifying what kind of person you are? But first, let me check something about you...",
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

  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  //  PER SINTETIZZATORE VOCALE
  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

//  PER SINTETIZZATORE VOCALE
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(0.8);
  voice.setPitch(1.3);
  voice.speak(voiceText);

  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

//  PER SINTETIZZATORE VOCALE
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

  //OCCHI:
  fill(255);
  strokeWeight(1.5);
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

  if (frameCount < 400) {
    image(DYK, 100, height - 190, 420 / 2, 217 / 2);
  }
  if (frameCount < 600 && frameCount > 400) {
    image(ButFirst, 100, height - 140, 420 / 2, 146 / 2);
  }

  //CARICAMENTO:
  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount / 30);
  image(loading, 0, 0, 100, 100);
  pop();

  //BALLOONS

  if (frameCount > 610) {
    push();
    frameRate(15);
    //differenza tra x corrente del mouse e x precedente --> se differenza = 0 allora non
    var difX = abs(mouseX - pmouseX);
    //differenza tra y corrente del mouse e y precedente.
    var difY = abs(mouseY - pmouseY);
    //con floor() si arrotonda la velocità
    var mySpeed = floor(difX + difY) / 10;
    //Segnalazione:
    if (mySpeed === 0) {
      image(ChillDude, 100, height - 140, 535 / 2, 121 / 2);
    } else if (mySpeed > 10) {
      image(Rush, 100, height - 140, 461 / 2, 146 / 2);
    }
    pop();
  }
}

let myTimer = window.setTimeout(nextPage, 14000); //Timeout in millisecondi
function nextPage() {
  window.open(
    "05-FirstReact.html?currentUser=" + parameter0 + "&AnswerTime=" + AT,
    "_self"
  );
  //Da aggiungere la parte del link Github prima di del nome di /03.Video.html"2022-group-project-group04/"
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#FFF44F");
}
