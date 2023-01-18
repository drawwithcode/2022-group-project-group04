let urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser"); //  user name
let parameter1 = url.searchParams.get("t1"); //  GIF1 (animals) permanence time
let parameter2 = url.searchParams.get("t2"); //  GIF2 (Bob Marley) permanence time
let parameter3 = url.searchParams.get("t3"); //  GIF3 (moms) permanence time
let parameter4 = url.searchParams.get("t4"); //  GIF4 (pizza) permanence time
let AT = url.searchParams.get("AnswerTime"); //  start page permanence time: user response time

let myFont;
let delphE;

let voice;
let voiceText = "You want to see your profile, am I right?";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
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

  //  buttons size
  let w = 461 / 1.3;
  let h = 155 / 1.3;
  let inc = 20;

  //  YES button
  yesButton = createElement("button", "OH YES");
  yesButton.position(width / 2 - (inc + w), height / 2 - (h - inc));
  yesButton.size(355, 120);
  yesButton.id("yesButton");
  yesButton.mouseClicked(nextPage);

  //  NO button
  noButton = createElement("button", "HELL NO");
  noButton.position(width / 2 + inc, height / 2 - (h - inc));
  noButton.size(355, 120);
  noButton.id("noButton");
  noButton.mouseOver(moveButton);
  noButton.mousePressed(moveButton);

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
  strokeWeight(1.5);

  //  right eye
  fill(255);
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

  //  balloon
  if (frameCount > 20) {
    img = createImg("./assets/images/Text7.svg");
    img.size(424 / 2, 150 / 2);
    img.position(100, height - 155);
  }
}

//  move NO button on hover and click
function moveButton() {
  noButton.position(random(0, width - 461), random(0, height - 155));
}

//  go to homepage
function home() {
  window.open("index.html", "_self");
}

//  go to next page
function nextPage() {
  window.open(
    "07-Profile.html?currentUser=" +
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
      parameter4,
      "_self"
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}