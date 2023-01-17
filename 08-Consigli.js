let img4;
let myButton;
let myButton2;

//  PER SINTETIZZATORE VOCALE
let voice;
let voiceText = "I highly suggest you...";

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

  myButton2 = createImg("./assets/images/LONG-BACK.svg");
  myButton2.style("position: absolute; cursor:pointer;");
  myButton2.size(290, 45);
  myButton2.position(width - 500, height - 88);
  myButton2.attribute("draggable", false);
  myButton2.mousePressed(backPage);
  myButton2.mouseOver(hoveringback);

  sugg1 = createImg("./assets/int/s-5.svg");
  sugg1.style("cursor:pointer;position:absolute");
  sugg1.size(329/1.05, 544/1.05);
  sugg1.position(40, height / 5);
  sugg1.attribute("draggable", false);
  sugg1.mousePressed(sugg1hover);

  sugg2 = createImg("./assets/int/s-6.svg");
  sugg2.style("cursor:pointer;position:absolute");
  sugg2.size(329/1.05, 544/1.05);
  sugg2.position(329+60, height / 5);
  sugg2.attribute("draggable", false);
  sugg2.mousePressed(sugg2hover);

  sugg3 = createImg("./assets/int/s-7.svg");
  sugg3.style("cursor:pointer;position:absolute");
  sugg3.size(329/1.05, 544/1.05);
  sugg3.position(329+50+329+30, height / 5);
  sugg3.attribute("draggable", false);
  sugg3.mousePressed(sugg3hover);

  sugg4 = createImg("./assets/int/s-8.svg");
  sugg4.style("cursor:pointer;position:absolute");
  sugg4.size(329/1.05, 544/1.05);
  sugg4.position(329+50+329+25+329+30, height / 5);
  sugg4.attribute("draggable", false);
  sugg4.mousePressed(sugg4hover);

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
  if ((mouseX < width - 290 && mouseX < width, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  //Return Hover
  if ((mouseX < width - 500 && mouseX > width - 210, mouseY < height - 88)) {
    myButton2.style("filter:invert(0)");
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function hoveringback() {
  myButton2.style("filter:invert(1)");
}

function nextPage() {
  window.open("09-Comments.html", "_self");
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function backPage() {
  window.open("07-Riassunto.html", "_self");
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function sugg1hover() {
  sugg1h = createImg("./assets/int/s-5-hover.svg");
  sugg1h.style("cursor:pointer");
  sugg1h.size(329/1.05, 544/1.05);
  sugg1h.position(40, height / 5);
  sugg1h.attribute("draggable", false);
}

function sugg2hover() {
  sugg2h = createImg("./assets/int/s-6-hover.svg");
  sugg2h.style("cursor:pointer");
  sugg2h.size(329/1.05, 544/1.05);
  sugg2h.position(329+60, height / 5);
  sugg2h.attribute("draggable", false);
}

function sugg3hover() {
  sugg3h = createImg("./assets/int/s-7-hover.svg");
  sugg3h.style("cursor:pointer");
  sugg3h.size(329/1.05, 544/1.05);
  sugg3h.position(329+50+329+30, height / 5);
  sugg3h.attribute("draggable", false);
}

function sugg4hover() {
  sugg4h = createImg("./assets/int/s-8-hover.svg");
  sugg4h.style("cursor:pointer");
  sugg4h.size(329/1.05, 544/1.05);
  sugg4h.position(329+50+329+25+329+30, height / 5);
  sugg4h.attribute("draggable", false);
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
