const urlString = window.location.href;
const url = new URL(urlString);

let myText;
let myType;
let go;
let myHome;

function setup() {
  let canvas = createCanvas(windowWidth - 50, windowHeight - 50);
  canvas.style(
    "border-radius: 10px; border-style: solid; border-color: black;"
  );
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  myText = createElement("h1", "What's your name?");
  myText.style(
    "position:absolute; top:40%; left: 50%; transform: translate(-50%,-50%); text-align:center;color:black;font-size: 40px; font-family:'Orbitron'"
  );

  //Inserimento nome
  myType = createInput("").attribute("placeholder", " ");
  myType.style(
    "position:absolute; top:55%; left: 50%; transform: translate(-50%,-50%); text-align: center;font-family:'Orbitron'; font-size:20px; border-radius: 20px"
  );

  //Botton
  go = createButton(" ----- ");
  go.style(
    "position:absolute; right:1%; bottom:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Orbitron'; font-size:40px; border-radius: 40px; background-color: purple; color: white; cursor:pointer"
  );
  go.mouseClicked(nextPage);

  myHome = createImg("./assets/images/Quit.png");
  myHome.style("transform: translate(-50%,-50%); cursor:pointer");
  myHome.size(55, 55);
  myHome.position(width - 180, height - 57);
}

function draw() {
  push();
  if ((mouseX > width * 0.65, mouseY > height * 0.65)) {
    let distance = dist(width - 180, height - 57, mouseX, mouseY);
    let diameter = map(distance, 0, width, 5, 55);
    myHome.size(diameter, diameter);
    myHome.position(width - 180, height - 57);
    myHome.mousePressed(returnHome);
    pop();
  } else {
    myHome.size(55, 55);
    myHome.position(width - 180, height - 57);
  }

  if (myType.value() == "") {
    myText.html("What's your name?");
  } else {
    myText.html("Welcome, " + myType.value() + "");
  }
}

function returnHome() {
  window.open(url.origin + "/index.html?", "_self");
}

function nextPage() {
  window.open(
    url.origin + "/03-Video.html?currentUser=" + myType.value(),
    "_self"
  );

  //Da aggiungere la parte del link Github prima di del nome di /03.Video.html
}
function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 50);
}
