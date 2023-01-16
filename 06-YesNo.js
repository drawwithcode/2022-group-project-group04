let myFont;
let delphE;


//  PER SINTETIZZATORE VOCALE
let voice;
let voiceText = "You want to see your profile, am I right?";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //    logo delphE
  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  //    balloon
  img = createImg("./assets/images/Text7.svg");
  img.size(424 / 2, 150 / 2);
  img.position(100, height - 155);

  //    button size
  let w = 461 / 1.3;
  let h = 155 / 1.3;
  let inc = 20;

  //    YES button
  yesButton = createElement("button", "OH YES");
  yesButton.position(width / 2 - (inc + w), height / 2 - (h - inc));
  yesButton.size(355, 120);
  yesButton.id("yesButton");
  yesButton.mouseClicked(nextPage);

  //    NO button
  noButton = createElement("button", "HELL NO");
  noButton.position(width / 2 + inc, height / 2 - (h - inc));
  noButton.size(355, 120);
  noButton.id("noButton");
  noButton.mouseOver(moveButton);
  noButton.mousePressed(moveButton);

  //  PER SINTETIZZATORE VOCALE
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
  strokeWeight(1.5);

  //    right eye
  fill(255);
  rect(60, height - 90, 30, 45, 15);
  //    right iris
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);

  //    left eye
  fill(255);
  rect(35, height - 90, 30, 45, 15);
  //    left iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);
}

function home() {
  window.open("index.html", "_self");
}

function hovering() {
  yesButton.style("filter:invert(1)");
}

//NON FUNZIONA SISTEMARE
function nextPage() {
  window.open(
    "07-Riassunto.html?currentUser=" +
      parameter0 +
      "&AnswerTime" +
      AT +
      "&t1=" +
      parameter1 +
      "&t2=" +
      parameter2 +
      "&t3=" +
      parameter3 +
      "&t4=" +
      frameCount / 60,
    "_self"
  );
}

function moveButton() {
  noButton.position(random(0, width - 461), random(0, height - 155));
}

//Da aggiungere al link: /2022-group-project-group04/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
