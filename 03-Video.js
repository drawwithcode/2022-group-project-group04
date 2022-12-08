const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;

function setup() {
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
