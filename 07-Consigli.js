let img4;

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
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px;"
  );

  myButton = createImg("./assets/images/next-2.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  sugg3 = createImg("./assets/int/s-3.svg");
  sugg3.style("cursor:pointer;position:absolute");
  sugg3.size(528 / 1.5, 723 / 1.5);
  sugg3.position(140, height / 7);
  sugg3.attribute("draggable", false);
  sugg3.mouseOver(sugg3hover);
  sugg3.mouseOut(sugg3over);

  sugg2 = createImg("./assets/int/s-2.svg");
  sugg2.style("cursor:pointer; ");
  sugg2.size(542 / 1.5, 723 / 1.5);
  sugg2.position(540, height / 7);
  sugg2.attribute("draggable", false);
  sugg2.mouseOver(sugg2hover);
  sugg2.mouseOut(sugg2over);

  sugg1 = createImg("./assets/int/s-1.svg");
  sugg1.style("cursor:pointer; ");
  sugg1.size(668 / 1.5, 476 / 1.5);
  sugg1.position(950, height / 7);
  sugg1.attribute("draggable", false);
  sugg1.mouseOver(sugg1hover);
  sugg1.mouseOut(sugg1over);

  sugg4 = createImg("./assets/int/s-4.svg");
  sugg4.style("cursor:pointer;");
  sugg4.size(678 / 1.5, 213 / 1.5);
  sugg4.position(950, height * 0.611);
  sugg4.attribute("draggable", false);
  sugg4.mouseOver(sugg4hover);
  sugg4.mouseOut(sugg4over);

  img4 = createImg("./assets/images/suggest.svg");
  img4.style("position:absolute;");
  img4.size(413.4 / 2, 121 / 2);
  img4.position(100, height - 120);
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

function sugg1hover() {
  sugg1h = createImg("./assets/int/s-1-hover.svg");
  sugg1h.style("cursor:pointer;");
  sugg1h.size(668 / 1.5, 476 / 1.5);
  sugg1h.position(950, height / 7);
}

function sugg1over() {
  sugg1h.size(0, 0);
}

function sugg2hover() {
  sugg2h = createImg("./assets/int/s-2-hover.svg");
  sugg2h.style("cursor:pointer;");
  sugg2h.size(542 / 1.5, 723 / 1.5);
  sugg2h.position(540, height / 7);
}

function sugg2over() {
  sugg2h.size(0, 0);
}

function sugg3hover() {
  sugg3h = createImg("./assets/int/s-3-hover.svg");
  sugg3h.style("cursor:pointer;position:absolute");
  sugg3h.size(528 / 1.5, 723 / 1.5);
  sugg3h.position(140, height / 7);
}

function sugg3over() {
  sugg3h.size(0, 0);
}

function sugg4hover() {
  sugg4h = createImg("./assets/int/s-4-hover.svg");
  sugg4h.style("cursor:pointer;");
  sugg4h.size(678 / 1.5, 213 / 1.5);
  sugg4h.position(950, height * 0.611);
}

function sugg4over() {
  sugg4h.size(0, 0);
}

function nextPage() {
  window.open("07-YesNo.html", "_self");
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
