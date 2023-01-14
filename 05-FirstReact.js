const urlString = window.location.href;
let url = new URL(urlString);

let parameter0 = url.searchParams.get("currentUser");
let AT = url.searchParams.get("AnswerTime");

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

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px;"
  );

  myButton = createImg("./assets/images/NextLong.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

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
  strokeWeight(2);
  rect(60, height - 90, 30, 45, 15);

  //iris
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);
  //white-iris
  let x4 = constrain(mouseX, 63, 72);
  let y4 = constrain(mouseY, height - 87, height - 68);
  fill(255);
  rect(x4, y4, 10, 15, 15 / 2);

  fill(255);
  rect(35, height - 90, 30, 45, 15);

  //iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //white-iris
  let x3 = constrain(mouseX, 37, 48);
  let y3 = constrain(mouseY, height - 87, height - 68);
  fill(255);
  rect(x3, y3, 10, 15, 15 / 2);

  //Return Hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  push();
  imageMode(CENTER);

  image(myGif, width / 2, height / 2.2, myGif.width / 1.1, myGif.height / 1.1);

  pop();

  //BALLOON
  if (frameCount > 20) {
    image(cute, 100, height - 140, 413.5 / 2, 121 / 2);
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

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
  //Da aggiungere la parte del link Github prima di del nome di /03.Video.html"2022-group-project-group04/"
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
  background("#FFF44F");
}
