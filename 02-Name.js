const urlString = window.location.href;
const url = new URL(urlString);

let myText;
let myType;
let myFont;
let go;
let myHome;
let img;
let img2;
let bg;

let scena;

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  img = loadImage("./assets/images/Text1.svg");
  img2 = loadImage("./assets/images/Text2.svg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  bg = "#68F6FF";
  background(bg);

  myText = createElement("h1", "WHAT'S YOUR NAME?");
  myText.style(
    "position:absolute; top:40%; left: 50%; transform: translate(-50%,-50%); text-align:center;color:black;font-size: 50px; font-family:'ClashDisplay-Variable'"
  );

  //Inserimento nome
  myType = createInput("").attribute("placeholder", "Don't be shy...");
  myType.style(
    "position:absolute; top:60%; left: 50%; transform: translate(-50%,-50%); text-align: left; ont-family:'ClashDisplay-Variable'; font-size:20px; padding-top:10px; padding-bottom:10px; padding-left: 20px;padding-right: 300px; border-radius: 30px"
  );
  myType.input(textWritten);

  //Button
  go = createImg("./assets/images/Next.svg");
  go.style(
    "position:absolute; transform: translate(-50%,-50%); cursor:pointer"
  );
  go.size(50, 50);
  go.position(width - 70, height - 70);
  go.mouseClicked(nextPage);
  go.mouseOver(hovering);
}

function draw() {
  if ((mouseX < width - 100, mouseY < height - 100)) {
    go.style("filter:invert(0)");
  }

  fill(255);
  strokeWeight(2);
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

  if (frameCount > 20 && frameCount < 500) {
    image(img, 100, height - 140, 613 / 2, 119 / 2);
  }
}

function returnHome() {
  window.open(url.origin + "/2022-group-project-group04/index.html?", "_self");
}

function nextPage() {
  window.open(
    url.origin +
      "/2022-group-project-group04/03-Video.html?currentUser=" +
      myType.value(),
    "_self"
  );

  //Da aggiungere la parte del link Github prima di del nome di /03.Video.html"2022-group-project-group04/"
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  go.position(width - 50, height - 50);
}