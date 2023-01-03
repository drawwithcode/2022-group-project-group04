// Sketch linked to secondary HTML page (page.html)

let img4;

function preload() {
  // sugg1 = loadImage('assets/int/s-1.svg');
  // sugg2 = loadImage('assets/int/s-2.svg');
  // sugg3 = loadImage('assets/int/s-3.svg');
  // sugg4 = loadImage('assets/int/s-4.svg');

  sugg1h = loadImage('assets/int/s-1-hover.svg');
  sugg2h = loadImage('assets/int/s-2-hover.svg');
  sugg3h = loadImage('assets/int/s-3-hover.svg');
  sugg4h = loadImage('assets/int/s-4-hover.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color('#FFF44F'));

  //rectMode(CENTER);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute; left: 50px; top: 35px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  myButton = createImg("./assets/images/next-2.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  img4 = createImg("./assets/images/suggest.svg");
  img4.style("position:absolute;");
  img4.size(613 / 1.34, 119 / 1.34);
  img4.position(10, height - 190);

}

function draw() {

  //occhi
  fill(255);
  strokeWeight(2);
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

    sugg1 = createImg("./assets/int/s-1.svg");
    sugg1.style("cursor:pointer;");
    sugg1.size(353/0.9, 299/0.9);
    sugg1.position(725, 580);
    sugg1.attribute("draggable", false);
    sugg1.mouseOver(sugg1hover);

    sugg2 = createImg("./assets/int/s-2.svg");
    sugg2.style("cursor:pointer;");
    sugg2.size(852/0.9, 387/0.9);
    sugg2.position(725, 110);
    sugg2.attribute("draggable", false);
    sugg2.mouseOver(sugg2hover);

    sugg3 = createImg("./assets/int/s-3.svg");
    sugg3.style("cursor:pointer;");
    sugg3.size(498/0.9, 582/0.9);
    sugg3.position(120, 110);
    sugg3.attribute("draggable", false);
    sugg3.mouseOver(sugg3hover);

    sugg4 = createImg("./assets/int/s-4.svg");
    sugg4.style("cursor:pointer;");
    sugg4.size(462/0.9, 305/0.9);
    sugg4.position(1150, 580);
    sugg4.attribute("draggable", false);
    sugg4.mouseOver(sugg4hover);

  // image(sugg3, 120, 110, 498/0.9, 582/0.9);
  // image(sugg2, 725, 110, 852/0.9, 387/0.9);
  // image(sugg1, 725, 580, 353/0.9, 299/0.9);
  // image(sugg4, 1150, 580, 462/0.9, 305/0.9);
  
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function sugg1hover() {
  sugg1h = createImg("./assets/int/s-1-hover.svg");
  sugg1h.style("cursor:pointer;");
  sugg1h.size(353/0.9, 299/0.9);
  sugg1h.position(725, 580);
}

function sugg2hover() {
  sugg2h = createImg("./assets/int/s-2-hover.svg");
  sugg2h.style("cursor:pointer;");
  sugg2h.size(852/0.9, 387/0.9);
  sugg2h.position(725, 110);
}

function sugg3hover() {
  sugg3h = createImg("./assets/int/s-3-hover.svg");
  sugg3h.style("cursor:pointer;");
  sugg3h.size(498/0.9, 582/0.9);
  sugg3h.position(120, 110);
}

function sugg4hover() {
  sugg4h = createImg("./assets/int/s-4-hover.svg");
  sugg4h.style("cursor:pointer;");
  sugg4h.size(462/0.9, 305/0.9);
  sugg4h.position(1150, 580);
}

function nextPage() {
  window.open(
    url.origin +
      "/05.2-ReactingGIF.html?currentUser=" +
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
}
