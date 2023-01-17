let img4;

//  PER SINTETIZZATORE VOCALE
let voice;
let voiceText = "I highly suggest you...";


function preload() {
  sugg1h = loadImage("./assets/int/s-1-hover.svg");
  sugg2h = loadImage("./assets/int/s-2-hover.svg");
  sugg3h = loadImage("./assets/int/s-3-hover.svg");
  sugg4h = loadImage("./assets/int/s-4-hover.svg");
}

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  myButton = createImg("./assets/images/next-2.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  img4 = createImg("./assets/images/suggest.svg");
  img4.style("position:absolute;");
  img4.size(413.4 / 2, 121 / 2);
  img4.position(100, height - 120);

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

  //occhi
  fill(255);
  strokeWeight(1.5);
  rect(60, height - 90, 30, 45, 15);
  //iris1
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);
  fill(255);
  rect(35, height - 90, 30, 45, 15);
  //iris2
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //Return Hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function nextPage() {
  window.open("09-Comments.html", "_self");
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
