const video = document.getElementById("video");

let myText;
let go;
let img;
let img2;

let voice;
let voiceText2 = "Nice to meet you. Can I have a big smile?";


Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  faceapi.nets.ageGenderNet.loadFromUri("/models"),
]).then(startVideo);

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
  img2 = loadImage("./assets/images/Text2.svg");
}

function setup() {
  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;"
  );
  
  go = createImg("./assets/images/Next.svg");
  go.style(
    "position:absolute; transform: translate(-50%,-50%); cursor:pointer"
  );
  go.size(50, 50);
  go.position(width + 1570, height + 870);
  //go.mouseClicked(nextPage);
  go.mouseOver(hovering);

  img = createImg("./assets/images/Text1.svg");
  img.style("position:absolute; transform: translate(0%,0%);");
  img.size(613 / 2, 119 / 2);
  img.position(100, height + 770);

  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

function draw() {

  //    QUESTO SECONDO ME POTREBBE ESSERE PORTATO A 1.5
 strokeWeight(1.5);

 //    right eye
 fill(255);
 rect(60, height - 90, 30, 45, 15);
 //    right iris
 let x2 = constrain(mouseX, 62, 72);
 let y2 = constrain(mouseY, height - 87, height - 68);
 fill(0);
 rect(x2, y2, 15, 20, 15 / 2);

 //    left eye
 fill(255);
 rect(35, height - 90, 30, 45, 15);
 //    left iris
 let x = constrain(mouseX, 36, 48);
 let y = constrain(mouseY, height - 87, height - 68);
 fill(0);
 rect(x, y, 15, 20, 15 / 2);
}

//  PER SINTETIZZATORE VOCALE
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(1);
  voice.setPitch(1.3);
  voice.setLang("en-US");
  voice.speak(voiceText2);
}

function hovering() {
go.style("filter:invert(1)");
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
        [
          `Age: ${faceapi.round(age, 0)}`,
          `Gender: ${gender}`,
        ],
        result.detection.box.topLeft,
        drawOptions
      ).draw(canvas);
    });
  }, 100);
});

function windowResized() {
  go.position(width - 50, height - 50);
}
