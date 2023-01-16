let urlString = window.location.href;
let url = new URL(urlString);

let parameter1 = url.searchParams.get("t1"); // Tempo permanenza GIF1
let parameter2 = url.searchParams.get("t2"); // Tempo permanenza GIF2
let parameter3 = url.searchParams.get("t3"); // Tempo permanenza GIF3
let parameter4 = url.searchParams.get("t4"); // Tempo permanenza GIF4
let parameter0 = url.searchParams.get("currentUser"); //Nome Utente
let AT = url.searchParams.get("AnswerTime"); //Tempo permanenza pagina iniziale: tempo di rispota dell'Utente

const video = document.getElementById("video");

let img3;
let myHover;
let myButton;
let myFont;
let canvas2;

let pageLinks = [
  "08-Consigli.html",
  "08.1-Consigli.html",
  "08.2-Consigli.html",
  "08.3-Consigli.html",
];

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
  faceapi.nets.faceExpressionNet.loadFromUri("./models"),
  faceapi.nets.ageGenderNet.loadFromUri("./models"),
]).then(startVideo);

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
}

function setup() {
  canvas2 = createCanvas(windowWidth, windowHeight);
  canvas2.position(0, 0);
  canvas2.style("position:absolute");

  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  myButton = createImg("./assets/images/more.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  img3 = createImg("./assets/images/here-you-go.svg");
  img3.style("position:absolute;");
  img3.size(413.5 / 2, 121 / 2);
  img3.position(100, height - 140);
}

function draw() {
  fill(255);
  strokeWeight(1.5);
  rectMode(CENTER);
  rect(width - 50 - (width * 0.49) / 2, height / 2, width * 0.49, 480, 30);

  fill("#68F6FF");
  strokeWeight(2);
  rect(
    width - 50 - (width * 0.49) / 2,
    height / 4,
    width * 0.46,
    height * 0.07,
    30
  );

  fill("#FFFFFF");
  strokeWeight(2);
  rect(
    width - 50 - (width * 0.49) / 2,
    height / 2.3,
    width * 0.46,
    height * 0.25,
    30
  );

  fill("#FFFFFF");
  strokeWeight(2);
  rect(
    width - 50 - (width * 0.49) / 2,
    height * 0.69,
    width * 0.46,
    height * 0.2,
    30
  );

  textname = createElement("h1");
  textname.html(parameter0);
  textname.style(
    "position:absolute; left: 51%; top: 21%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:24px;"
  );

  text1 = createElement("h1");
  text1.html(round(parameter1, 2));
  text1.style(
    "position:absolute; left: 51%; top: 32%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:16px; "
  );

  text2 = createElement("h1");
  text2.html(round(parameter2, 2));
  text2.style(
    "position:absolute; left: 51%; top: 36%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:16px"
  );

  text3 = createElement("h1");
  text3.html(round(parameter3, 2));
  text3.style(
    "position:absolute; left: 51%; top: 40%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:16px"
  );

  text4 = createElement("h1");
  text4.html(round(parameter4, 2));
  text4.style(
    "position:absolute; left: 51%; top: 44%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:16px"
  );

  text5 = createElement("h1");
  text5.html(round(AT, 2));
  text5.style(
    "position:absolute; left: 51%; top: 48%; text-align: left; font-family:'ClashDisplay-Regular'; font-size:16px"
  );

  //Occhi
  push();
  rectMode(CORNER);
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
  pop();

  //Return Hover
  if ((mouseX < width - 290, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function startVideo() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      { video: true },
      function (stream) {
        var video = document.querySelector("video");
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      },
      function (err) {
        console.log(err.name);
      }
    );
  } else {
    document.body.innerText = "getUserMedia not supported";
    console.log("getUserMedia not supported");
  }
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const predictions = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions()
      .withAgeAndGender();

    const resizedDetections = faceapi.resizeResults(predictions, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    resizedDetections.forEach((result) => {
      const { age, gender } = result;

      const drawOptions = {
        backgroundColor: "#ffd100",
        fontColor: "#000000",
      };

      new faceapi.draw.DrawTextField(
        [`Age: ${faceapi.round(age, 0)}`, `Gender: ${gender}`],
        result.detection.box.topLeft,
        drawOptions
      ).draw(canvas);
    });
  }, 100);
});

function nextPage() {
  window.open(random(pageLinks), "_self");
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myButton.position(width - 290, height - 88);
}
