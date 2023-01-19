const urlString = window.location.href; //  Collect the url
let url = new URL(urlString); //  Create a machine-readable object

let parameter0 = url.searchParams.get("currentUser"); //  user name
let AT = url.searchParams.get("AnswerTime"); //  start page permanence time: user response time

const video = document.getElementById("video");

let myText;
let go;
let img;
let canvas2;
let img2;
let voice;
let voiceText2 = ["Nice to meet you. Can I have a big smile?",];

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
  faceapi.nets.faceExpressionNet.loadFromUri("./models"),
  faceapi.nets.ageGenderNet.loadFromUri("./models"),
]).then(startVideo);

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  img = loadImage("./assets/images/Textvideo.svg");
  img2 = loadImage("./assets/images/Textvideo2.svg");
}

function setup() {
  canvas2 = createCanvas(windowWidth, windowHeight);
  canvas2.position(0, 0);

  //  logo delphE
  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  //  next button
  go = createImg("./assets/images/Moveon.svg");
  go.style(
    "position:absolute; transform: translate(-50%,-50%); cursor:pointer"
  );
  go.size(290, 45);
  go.position(width - 190, height - 70);
  go.mouseClicked(nextPage);
  go.mouseOver(hovering);

  

  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

//  voice synthesizer
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(1);
  voice.setPitch(1.3);
  //voice.setLang("en-US");
  voice.speak(voiceText2);
}

function draw() {
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
  // left iris
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //first balloon
  if (frameCount < 30 && frameCount > 0) {
    image(img2, 100, height - 140, 471.5 / 2, 121 / 2);
  }

  //  second balloon
  if (frameCount < 600 && frameCount > 30) {
    image(img, 100, height - 140, 471.5 / 2, 121 / 2);
  }
  
}

function hovering() {
  go.style("filter:invert(1)");
}

//  face api
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

//  go to next page
function nextPage() {
  window.open(
    "04-Load.html?currentUser=" + parameter0 + "&AnswerTime=" + AT,
    "_self"
  );
}

//  go to homepage
function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  go.position(width - 70, height - 70);
}
