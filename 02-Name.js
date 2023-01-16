const urlString = window.location.href;
let url = new URL(urlString);

let myText;
let myType;
let myFont;
let go;
let myHome;
let img;
let img2;
let bg;
let scena;

let voice;
let voiceText2 = "But first, I need some basic information...";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  img2 = loadImage("./assets/images/Text2.svg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  myText = createElement("h1", "WHAT'S YOUR NAME?");
  myText.style(
    "position:absolute; top:40%; left: 50%; transform: translate(-50%,-50%); text-align:center;color:black;font-size: 50px; font-family:'ClashDisplay-Regular'"
  );

  //Inserimento nome
  myType = createInput("").attribute("placeholder", "Don't be shy...");
  myType.style(
    "position:absolute; top:60%; left: 50%; transform: translate(-50%,-50%); text-align: left; font-family:'ClashDisplay-Regular'; font-size:20px; padding-top:10px; padding-bottom:10px; padding-left: 20px;padding-right: 300px; border-radius: 30px"
  );

  //Button
  go = createImg("./assets/images/Next.svg");
  go.style(
    "position:absolute; transform: translate(-50%,-50%); cursor:pointer"
  );
  go.size(50, 50);
  go.position(width - 70, height - 70);
  go.mouseClicked(nextPage);
  go.mouseOver(hovering);

  img = createImg("./assets/images/Text1.svg");
  img.style("position:absolute; transform: translate(0%,0%);");
  img.size(613 / 2, 119 / 2);
  img.position(100, height - 140);

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
  voice.speak(voiceText2);
}

function draw() {
  background("#68F6FF");
  if ((mouseX < width - 100, mouseY < height - 100)) {
    go.style("filter:invert(0)");
  }

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

  myType.input(textWritten);
}

function textWritten() {
  push();
  img.size(0, 0);
  pop();
  img2 = createImg("./assets/images/Text2.svg");
  img2.style("position:absolute; transform: translate(0%,0%);");
  img2.size(613 / 2, 119 / 2);
  img2.position(100, height - 140);
}

function hovering() {
  go.style("filter:invert(1)");
}

function home() {
  window.open("index.html", "_self");
}

function keyPressed() {
  if (keyCode === ENTER) {
    window.open(
      "03-Video.html?currentUser=" +
        myType.value() +
        "&AnswerTime=" +
        frameCount / 60,
      "_self"
    );
  }
}

function nextPage() {
  window.open(
    "03-Video.html?currentUser=" +
      myType.value() +
      "&AnswerTime=" +
      frameCount / 60,
    "_self"
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  go.position(width - 50, height - 50);
  background("#68F6FF");
}
