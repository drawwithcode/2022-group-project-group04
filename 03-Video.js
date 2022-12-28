let urlString = window.location.href;
let url = new URL(urlString);

let parameter0 = url.searchParams.get("currentUser");
let AT = url.searchParams.get("AnswerTime");

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  DYK = loadImage("./assets/images/DYK.svg");
  ButFirst = loadImage("./assets/images/ButFirst.svg");
  ChillDude = loadImage("./assets/images/ChillDude.svg");
  Rush = loadImage("./assets/images/Rush.svg");
  loading = loadImage("./assets/images/Loading.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;"
  );
}

function draw() {
  background("red");
  text("" + parameter0, 100, 100);
  text("" + AT, 100, 300);
}

function mouseClicked() {
  window.open(
    url.origin +
      "/04-Load.html?currentUser=" +
      parameter0 +
      "&AnswerTime=" +
      AT,
    "_self"
  );
  //Da aggiungere la parte del link Github prima di del nome di /03.Video.html"2022-group-project-group04/"
}
