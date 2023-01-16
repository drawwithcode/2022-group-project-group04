let myFont;
let delphE;
let myInfo;

let fakeText; 

// effetto testo
let content = "";
keyCount = 0;

//  PER SINTETIZZATORE VOCALE (AGGIUNGERE IN HTML COLLEGAMENTO LIBRERIA)
let voice;
let voiceText = "Your opinion is very important to me...";
let voiceText2 = "I mean,  I really don’t care but thank you...";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
  ////
  Balloon1 = loadImage("./assets/images/Text8.svg");
  Balloon2 = loadImage("./assets/images/Text9.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#8261FF");

  //    logo delphE
  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  //   balloon
  Balloon1 = createImg("./assets/images/Text8.svg");
  Balloon1.size(424 / 2, 150 / 2);
  Balloon1.position(100, height - 155);

  //    text
  myText = createElement("h1", "LEAVE A COMMENT <br> ABOUT THE EXPERIENCE");
  myText.style(
    "position:absolute; top:20%; left: 50%; transform: translate(-50%,-50%); text-align:center;color:black;font-size: 50px; font-family:'ClashDisplay-Regular'"
  );

  //    fake input box
  strokeWeight(2);
  rect(width / 2 - 350, height / 2 - 150, 700, 350, 30 / 2);

  //    info button
  myInfo = createImg("./assets/images/Info.svg");
  myInfo.style("position: absolute; cursor:pointer;");
  myInfo.size(50, 50);
  myInfo.position(width - 95, height - 95);
  myInfo.mousePressed(info);

  //  PER SINTETIZZATORE VOCALE
  voice = new p5.Speech();
  voice.onLoad = voiceReady;

  fakeText = createElement("h1");
  fakeText.html("Everything that comes to mind...");
  fakeText.style("position:absolute;  left: 430px; top: 290px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 20px; color: #5C5C5C;");
}

//  PER SINTETIZZATORE VOCALE
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(0.8);
  voice.setPitch(1.3);
  voice.setLang("en-US");
  voice.speak(voiceText);
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

  textSize(20);
  textFont("ClashDisplay-Regular");
  text(content, width / 2 - 325, height / 2 - 125, width / 2 - 100, height / 2);

}

function keyTyped() {
  keyCount++;
  console.log(keyCount);

  if (keyCount == 1) {
    content += "It ";
    fakeText.hide();
  }

  if (keyCount == 2) {
    content += "was ";
  }

  if (keyCount == 3) {
    content += "an ";
  }

  if (keyCount == 4) {
    content += "incredible ";
  }

  if (keyCount == 5) {
    content += "experience, ";
  }

  if (keyCount == 6) {
    content += "I ";
  }

  if (keyCount == 7) {
    content += "really ";
  }

  if (keyCount == 8) {
    content += "enjoyed ";
  }

  if (keyCount == 9) {
    content += "the ";
  }

  if (keyCount == 10) {
    content += "company ";
  }

  if (keyCount == 11) {
    content += "of a ";
  }

  if (keyCount == 12) {
    content += "site ";
  }

  if (keyCount == 13) {
    content += "that ";
  }

  if (keyCount == 14) {
    content += "knows me ";
  }

  if (keyCount == 15) {
    content += "deeply ";
  }

  if (keyCount == 16) {
    content += "and ";
  }

  if (keyCount == 17) {
    content += "espresses ";
  }

  if (keyCount == 18) {
    content += "my ";
  }

  if (keyCount == 19) {
    content += "inner ";
  }

  if (keyCount == 20) {
    content += "thoughts.";
  }

  if (keyCode === ENTER) {
    Balloon1.hide();
    image(Balloon2, 100, height - 155, 424 / 2, 150 / 2);

    voice.listVoices();
    voice.setVoice("Samantha");
    voice.setRate(0.8);
    voice.setPitch(1.3);
    voice.setLang("en-US");
    voice.speak(voiceText2);    
  }
}

//    pagina
function info() {
  window.open("/10-Info.html", "_self");
}

function home() {
  window.open("index.html", "_self");
}

//Da aggiungere al link: /2022-group-project-group04/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
