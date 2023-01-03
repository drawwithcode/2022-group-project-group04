let myFont;
let delphE;

let yesButton;
let noButton;


//  PER SINTETIZZATORE VOCALE
let voice;
let voiceText = "You want to see your profile, am I right?";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Variable.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //    logo delphE
  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style("position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Variable'; font-size: 16px;");
  
  //    balloon 
  img = createImg("./assets/images/Text7.svg");
  img.size(424 / 2, 150 / 2);
  img.position(100, height - 155);  

  //    button size
  let w = 461 / 1.3;
  let h = 155 / 1.3;
  let inc = 20;

  //    YES button
  yesButton = createImg("./assets/images/Yes.svg");
  yesButton.style("position: absolute; cursor:pointer;");
  yesButton.size(w, h);
  yesButton.position(width / 2 - (inc + w), height / 2 - (h - inc));
  yesButton.mousePressed(nextPage);

  //    NO button
  noButton = createImg("./assets/images/No.svg");
  noButton.style("position: absolute; cursor:pointer;");
  noButton.size(w, h);
  noButton.position(width / 2 + inc, height / 2 - (h - inc));
  noButton.mouseOver(moveButton);
  noButton.mousePressed(moveButton);

  //  PER SINTETIZZATORE VOCALE 
  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}

//  PER SINTETIZZATORE VOCALE 
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha"); 
  voice.setRate(0.8); 
  voice.setPitch(1.3); 
  voice.speak(voiceText);
}

function nextPage() {
    window.open("/08-Comments.html", "_self");
}
  
function moveButton() {
   noButton.position(random(0, width - 461), random(0, height - 155));
} 

function draw() {
  background("#FFF44F");

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

//Da aggiungere al link: /2022-group-project-group04/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
