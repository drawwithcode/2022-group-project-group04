let faceapi;
let detections = [];
let myFont;

let myVideo;
let myCanvas;
let myVid;

let urlString = window.location.href;
let url = new URL(urlString);
let parameter0 = url.searchParams.get("currentUser");
let AT = url.searchParams.get("AnswerTime");

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
}

function setup() {
  background("#8261FF");
  myCanvas = createCanvas(960, 720);
  myCanvas.style("position:relative, top:0px, z-index: 1");

  myVideo = createCapture(VIDEO); // Creat the video: ビデオオブジェクトを作る
  myVideo.size(width, height);
  myVideo.style(
    "position: absolute; top:0px, left:0px; z-index:0; border: 2px; border-radius:30px"
  );
  myVideo.hide();

  const faceOptions = {
    //withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5,
  };

  //Initialize the model: モデルの初期化
  faceapi = ml5.faceApi(myVideo, faceOptions, faceReady);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;"
  );
}

function faceReady() {
  faceapi.detect(gotFaces); // Start detecting faces: 顔認識開始
}

function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result; //Now all the data in this detections: 全ての検知されたデータがこのdetectionの中に
  // console.log(detections);

  clear(); //Draw transparent background;: 透明の背景を描く
  drawBoxs(detections); //Draw detection box: 顔の周りの四角の描画
  drawBoxs2(detections);
  // drawLandmarks(detections);//// Draw all the face points: 全ての顔のポイントの描画
  drawExpressions(detections, 200, 250, 14); //Draw face expression: 表情の描画

  faceapi.detect(gotFaces); // Call the function again at here: 認識実行の関数をここでまた呼び出す
}

function drawBoxs(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    for (f = 0; f < detections.length; f++) {
      let { _x, _y, _width, _height } = detections[f].alignedRect._box;
      stroke("#FFF44F");
      strokeWeight(10);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}

function drawBoxs2(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    for (f = 0; f < detections.length; f++) {
      let { _x, _y, _width, _height } = detections[f].alignedRect._box;
      stroke("#FFF44F");
      strokeWeight(10);
      fill("#FFF44F");
      rect(_x, _y - 60, 180, 60);
    }
  }
}

function drawExpressions(detections, x, y, textYSpace) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    let { neutral, happy, angry, sad, disgusted, surprised, fearful } =
      detections[0].expressions;
    textFont(myFont);
    textSize(14);
    noStroke();
    fill("black");

    text("neutral:       " + nf(neutral * 100, 2, 2) + "%", x, y);
    text("happiness: " + nf(happy * 100, 2, 2) + "%", x, y + textYSpace);
    text("anger:        " + nf(angry * 100, 2, 2) + "%", x, y + textYSpace * 2);
    text("sad:            " + nf(sad * 100, 2, 2) + "%", x, y + textYSpace * 3);
    text(
      "disgusted: " + nf(disgusted * 100, 2, 2) + "%",
      x,
      y + textYSpace * 4
    );
    text(
      "surprised:  " + nf(surprised * 100, 2, 2) + "%",
      x,
      y + textYSpace * 5
    );
    text(
      "fear:           " + nf(fearful * 100, 2, 2) + "%",
      x,
      y + textYSpace * 6
    );
  } else {
    //If no faces is detected: 顔が1つも検知されていなかったら
    text("neutral: ", x, y);
    text("happiness: ", x, y + textYSpace);
    text("anger: ", x, y + textYSpace * 2);
    text("sad: ", x, y + textYSpace * 3);
    text("disgusted: ", x, y + textYSpace * 4);
    text("surprised: ", x, y + textYSpace * 5);
    text("fear: ", x, y + textYSpace * 6);
  }
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#FFF44F");
}
