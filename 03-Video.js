const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;

function setup() {
  capture = createCapture(VIDEO);
  capture.hide();

  let canvas = createCanvas(windowWidth - 50, windowHeight - 50);
  canvas.style(
    "border-radius: 10px; border-style: solid; border-color: black;"
  );
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  //Nome dell'autore
  myText = createElement("h1", "Hello, " + parameter);
  myText.style(
    "position: absolute; top:50%; left: 50%; text-align:center;color:black; transform: translate(-50%,-50%); font-size: 40px; font-family:'Orbitron'"
  );
}

function draw() {
  push();
  if (capture.loadedmetadata) {
    image(capture, 50, 50, capture.width, capture.height);
    filter(GRAY);
  }
  pop();
}
