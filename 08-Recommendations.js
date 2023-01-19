let urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser"); //  user name
let parameter1 = url.searchParams.get("t1"); //  GIF1 (animals) permanence time
let parameter2 = url.searchParams.get("t2"); //  GIF2 (Bob Marley) permanence time
let parameter3 = url.searchParams.get("t3"); //  GIF3 (moms) permanence time
let parameter4 = url.searchParams.get("t4"); //  GIF4 (pizza) permanence time
let AT = url.searchParams.get("AnswerTime"); //  start page permanence time: user response time

let img4;
let myButton;
let myButton2;

let voice;
let voiceText = "I highly suggest you...";

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

  //  next button
  myButton = createImg("./assets/images/next-2.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  //  reload button
  myButton2 = createImg("./assets/images/reload.svg");
  myButton2.style("position: absolute; cursor:pointer;");
  myButton2.size(45, 45);
  myButton2.position(width - 300 - 50, height - 88);
  myButton2.attribute("draggable", false);
  myButton2.mousePressed(reload);
  myButton2.mouseOver(hoveringReload);

  //  back button
  myButton3 = createImg("./assets/images/LONG-BACK.svg");
  myButton3.style("position: absolute; cursor:pointer;");
  myButton3.size(290, 45);
  myButton3.position(width - 555 - 100, height - 88);
  myButton3.attribute("draggable", false);
  myButton3.mousePressed(backPage);
  myButton3.mouseOver(hoveringback);

  //  recommendations for GIF1 (animals)
  if (parameter1 > 0 && parameter1 <= 3) {
    sugg1 = createImg("./assets/ints/s-1.svg");
    sugg1.style("cursor:pointer;position:absolute;");
    sugg1.size(329/1.05, 544/1.05);
    sugg1.position(40, height/6);
    sugg1.attribute("draggable", false);
    sugg1.mousePressed(sugg1hover);
  } 
    
  else if (parameter1 > 3 && parameter1 <= 7) {
    sugg2 = createImg("./assets/ints/s-2.svg");
    sugg2.style("cursor:pointer;position:absolute;");
    sugg2.size(329/1.05, 544/1.05);
    sugg2.position(40, height/6);
    sugg2.attribute("draggable", false);
    sugg2.mousePressed(sugg2hover);
  }
  
  else if (parameter1 > 7) {
    sugg3 = createImg("./assets/ints/s-3.svg");
    sugg3.style("cursor:pointer;position:absolute;");
    sugg3.size(329/1.05, 544/1.05);
    sugg3.position(40, height/6);
    sugg3.attribute("draggable", false);
    sugg3.mousePressed(sugg3hover);
  }

  //  recommendations for GIF2 (Bob Marley)
  if (parameter2 > 0 && parameter2 <= 3) {
    sugg4 = createImg("./assets/ints/s-4.svg");
    sugg4.style("cursor:pointer;position:absolute");
    sugg4.size(329/1.05, 544/1.05);
    sugg4.position(width/4 + 26, height/6);
    sugg4.attribute("draggable", false);
    sugg4.mousePressed(sugg4hover);
  } 
    
  else if (parameter2 > 3 && parameter2 <= 7) {
    sugg5 = createImg("./assets/ints/s-5.svg");
    sugg5.style("cursor:pointer;position:absolute");
    sugg5.size(329/1.05, 544/1.05);
    sugg5.position(width/4 + 26, height/6);
    sugg5.attribute("draggable", false);
    sugg5.mousePressed(sugg5hover);
  }
  
  else if (parameter2 > 7) {
    sugg6 = createImg("./assets/ints/s-6.svg");
    sugg6.style("cursor:pointer;position:absolute");
    sugg6.size(329/1.05, 544/1.05);
    sugg6.position(width/4 + 26, height/6);
    sugg6.attribute("draggable", false);
    sugg6.mousePressed(sugg6hover);
  }

  //  recommendations for GIF3 (moms)
  if (parameter3 > 0 && parameter3 <= 3) {
    sugg7 = createImg("./assets/ints/s-7.svg");
    sugg7.style("cursor:pointer;position:absolute");
    sugg7.size(329/1.05, 544/1.05);
    sugg7.position(width/2 + 13, height/6);
    sugg7.attribute("draggable", false);
    sugg7.mousePressed(sugg7hover);
  } 
    
  else if (parameter3 > 3 && parameter3 <= 7) {
    sugg8 = createImg("./assets/ints/s-8.svg");
    sugg8.style("cursor:pointer;position:absolute");
    sugg8.size(329/1.05, 544/1.05);
    sugg8.position(width/2 + 13, height/6);
    sugg8.attribute("draggable", false);
    sugg8.mousePressed(sugg8hover);
  }
  
  else if (parameter3 > 7) {
    sugg9 = createImg("./assets/ints/s-9.svg");
    sugg9.style("cursor:pointer;position:absolute");
    sugg9.size(329/1.05, 544/1.05);
    sugg9.position(width/2 + 13, height/6);
    sugg9.attribute("draggable", false);
    sugg9.mousePressed(sugg9hover);
  }

  //  recommendations for GIF4 (pizza)
  if (parameter4 > 0 && parameter4 <= 3) {
    sugg10 = createImg("./assets/ints/s-10.svg");
    sugg10.style("cursor:pointer;position:absolute");
    sugg10.size(329/1.05, 544/1.05);
    sugg10.position(width/1.33, height/6);
    sugg10.attribute("draggable", false);
    sugg10.mousePressed(sugg10hover);
  } 
    
  else if (parameter4 > 3 && parameter4 <= 7) {
    sugg11 = createImg("./assets/ints/s-10.svg");
    sugg11.style("cursor:pointer;position:absolute");
    sugg11.size(329/1.05, 544/1.05);
    sugg11.position(width/1.33, height/6);
    sugg11.attribute("draggable", false);
    sugg11.mousePressed(sugg11hover);
  }
  
  else if (parameter4 > 7) {
    sugg12 = createImg("./assets/ints/s-10.svg");
    sugg12.style("cursor:pointer;position:absolute");
    sugg12.size(329/1.05, 544/1.05);
    sugg12.position(width/1.33, height/6);
    sugg12.attribute("draggable", false);
    sugg12.mousePressed(sugg12hover);
  }

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
  img4 = createImg("./assets/images/suggest.svg");
  img4.style("position:absolute;");
  img4.size(413.4 / 2, 121 / 2);
  img4.position(100, height - 140);
  }

  //  return hover next button
  if ((mouseX < width - 290 && mouseX < width, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  //  return hover reload button
  if ((mouseX < width - 300 - 50 && mouseX < width - 290, mouseY < height - 88)) {
    myButton2.style("filter:invert(0)");
  }

  //  return hover back button
  if ((mouseX < width - 555 - 100 && mouseX < width - 150, mouseY < height - 88)) {
    myButton3.style("filter:invert(0)");
  }
}

//  recommendations text
function sugg1hover() {
  sugg1h = createImg("./assets/ints/s-1-h.svg");
  sugg1h.style("cursor:pointer");
  sugg1h.size(329/1.05, 544/1.05);
  sugg1h.position(40, height/6);
  sugg1h.attribute("draggable", false);
}

function sugg2hover() {
  sugg2h = createImg("./assets/ints/s-2-h.svg");
  sugg2h.style("cursor:pointer");
  sugg2h.size(329/1.05, 544/1.05);
  sugg2h.position(40, height/6);
  sugg2h.attribute("draggable", false);
}

function sugg3hover() {
  sugg3h = createImg("./assets/ints/s-3-h.svg");
  sugg3h.style("cursor:pointer");
  sugg3h.size(329/1.05, 544/1.05);
  sugg3h.position(40, height/6);
  sugg3h.attribute("draggable", false);
}

function sugg4hover() {
  sugg4h = createImg("./assets/ints/s-4-h.svg");
  sugg4h.style("cursor:pointer");
  sugg4h.size(329/1.05, 544/1.05);
  sugg4h.position(width/4 + 26, height/6);
  sugg4h.attribute("draggable", false);
}

function sugg5hover() {
  sugg5h = createImg("./assets/ints/s-5-h.svg");
  sugg5h.style("cursor:pointer");
  sugg5h.size(329/1.05, 544/1.05);
  sugg5h.position(width/4 + 26, height/6);
  sugg5h.attribute("draggable", false);
}

function sugg6hover() {
  sugg6h = createImg("./assets/ints/s-6-h.svg");
  sugg6h.style("cursor:pointer");
  sugg6h.size(329/1.05, 544/1.05);
  sugg6h.position(width/4 + 26, height/6);
  sugg6h.attribute("draggable", false);
}

function sugg7hover() {
  sugg7h = createImg("./assets/ints/s-7-h.svg");
  sugg7h.style("cursor:pointer;position:absolute");
  sugg7h.size(329/1.05, 544/1.05);
  sugg7h.position(width/2 + 13, height/6);
  sugg7h.attribute("draggable", false);
}

function sugg8hover() {
  suggh8h = createImg("./assets/ints/s-8-h.svg");
  suggh8h.style("cursor:pointer;position:absolute");
  suggh8h.size(329/1.05, 544/1.05);
  suggh8h.position(width/2 + 13, height/6);
  suggh8h.attribute("draggable", false);
}

function sugg9hover() {
  sugg9h = createImg("./assets/ints/s-9-h.svg");
  sugg9h.style("cursor:pointer;position:absolute");
  sugg9h.size(329/1.05, 544/1.05);
  sugg9h.position(width/2 + 13, height/6);
  sugg9h.attribute("draggable", false);
}

function sugg10hover() {
  sugg10h = createImg("./assets/ints/s-10-h.svg");
  sugg10h.style("cursor:pointer;position:absolute");
  sugg10h.size(329/1.05, 544/1.05);
  sugg10h.position(width/1.33, height/6);
  sugg10h.attribute("draggable", false);
}

function sugg11hover() {
  sugg11h = createImg("./assets/ints/s-11-h.svg");
  sugg11h.style("cursor:pointer;position:absolute");
  sugg11h.size(329/1.05, 544/1.05);
  sugg11h.position(width/1.33, height/6);
  sugg11h.attribute("draggable", false);
}

function sugg12hover() {
  sugg12h = createImg("./assets/ints/s-12-h.svg");
  sugg12h.style("cursor:pointer;position:absolute");
  sugg12h.size(329/1.05, 544/1.05);
  sugg12h.position(width/1.33, height/6);
  sugg12h.attribute("draggable", false);
}

//  reload
function reload() {
  setup();
}

//  hover next button
function hovering() {
  myButton.style("filter:invert(1)");
}

//  hover reload button
function hoveringReload() {
  myButton2.style("filter:invert(1)");
}

//  hover back button
function hoveringback() {
  myButton3.style("filter:invert(1)");
}

//  go to next page
function nextPage() {
  window.open("09-Comments.html", "_self");
}

//  go to prev page
function backPage() {
  window.open("07-Profile.html?currentUser=" +
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

//  go to homepage
function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
