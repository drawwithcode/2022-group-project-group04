let myFont;

let close;
let restart;

let asterisco;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FF2C54");
 
  //    info button
  close = createImg("./assets/images/Close.svg");
  close.style("position: absolute; cursor:pointer;");
  close.size(50, 50);
  close.position(40, height - 95);
  close.mousePressed(prevPage);
  close.mouseOver(hoveringOne);

  //    restart button
  restart = createImg("./assets/images/Restart.svg");
  restart.style("position: absolute; cursor:pointer;");
  restart.size(290, 45);
  restart.position(width - 290, height - 88);
  restart.mousePressed(startPage);
  restart.mouseOver(hoveringTwo);

  //    info box
  strokeWeight(2);
  rect(40, 40, width - 75, height - 175, 30 / 2);

  //    text box
//   textSize(24);
//   textFont("ClashDisplay-Variable");
//   text(myText, width / 2 - 325, height / 2 - 125, width / 2 - 100, height / 2);

  myText = createElement("h2", "“Are the algorithms the new crystal ball or even the 21st Century Oracle of Delphi? The Internet’s maxim seems to be: Give me some information about yourself and I’ll give you what you want”.");
  myText.style("position:absolute; top:12%; left: 40%; transform: translate(-30%,-50%); text-align:left; font-size: 24px; font-family:'Clash Display'; font-weight: 500");
  
  myText2 = createElement("h2", "Delph⋅E is a virtual space that aims to make tangible the presence of technology and profiling algorithms in everyday life. Every time a user surfs the Internet, he unknowingly leaves behind a trail of data. This data is collected and exploited by profiling algorithms to 'know' the user and return 'tailored' recommendations, showing only what the user might like. <br>Delph⋅E replicates this experience, making it explicit and intentionally coarse and stereotypical. Through facial expression recognition technologies, the website collects user’s emotions and reactions to certain content to extort his preferences and make a series of decisions about him. The result is the flattening of the user, associated with a false and stereotypical identity model.");
  myText2.style("position:absolute; top:38%; left: 40%; transform: translate(-30%,-50%); text-align:left; font-size: 24px; font-family:'Clash Display'; font-weight: 400");

  myText3 = createElement("h2", "The project was developed during the Creative Coding course at Politecnico di Milano (2022-23).");
  myText3.style("position:absolute; top:62%; left: 40%; transform: translate(-30%,-50%); text-align:left; font-size: 24px; font-family:'Clash Display'; font-weight: 500");

  asterisco = createImg("./assets/images/Asterisco.svg");
  asterisco.size(85, 85);
  asterisco.position(140, 80);
  asterisco.attribute("draggable", false);
}


function prevPage() {
    window.open("/09-Comments.html", "_self");
}

function startPage() {
    window.open("/index.html", "_self");
}

function draw() {
  if ((mouseX < 40, mouseY < height - 95)) {
    close.style("filter:invert(0)");
  }

  if ((mouseX < width - 290, mouseY < height - 88)) {
    restart.style("filter:invert(0)");
  }

}

function hoveringOne() {
    close.style("filter:invert(1)");
}

function hoveringTwo() {
    restart.style("filter:invert(1)");
}

//Da aggiungere al link: /2022-group-project-group04/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
