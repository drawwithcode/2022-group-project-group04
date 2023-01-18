let urlString = window.location.href;
let url = new URL(urlString);

let parameter1 = url.searchParams.get("t1"); // Tempo permanenza GIF1
let parameter2 = url.searchParams.get("t2"); // Tempo permanenza GIF2
let parameter3 = url.searchParams.get("t3"); // Tempo permanenza GIF3
let parameter4 = url.searchParams.get("t4"); // Tempo permanenza GIF4
let parameter0 = url.searchParams.get("currentUser"); //Nome Utente
let AT = url.searchParams.get("AnswerTime"); //Tempo permanenza pagina iniziale: tempo di rispota dell'Utente

let img4;
let myButton;
let myButton2;

//////
let test = 0;

//  PER SINTETIZZATORE VOCALE
let voice;
let voiceText = "I highly suggest you...";

function preload() {
  myFont = loadFont("./assets/fonts/ClashDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  delphE = createElement("h1");
  delphE.html("Delph&bull;E");
  delphE.style(
    "position:absolute;  left: 50px; top: 35px; text-align: left; font-family:'ClashDisplay-Regular'; font-size: 16px; cursor: pointer;"
  );
  delphE.mousePressed(home);

  myButton = createImg("./assets/images/next-2.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);

  myButton2 = createImg("./assets/images/reload.svg");
  myButton2.style("position: absolute; cursor:pointer;");
  myButton2.size(45, 45);
  myButton2.position(width - 300 - 50, height - 88);
  myButton2.attribute("draggable", false);
  myButton2.mousePressed(reload);
  myButton2.mouseOver(hoveringReload);

  myButton3 = createImg("./assets/images/LONG-BACK.svg");
  myButton3.style("position: absolute; cursor:pointer;");
  myButton3.size(290, 45);
  myButton3.position(width - 555 - 100, height - 88);
  myButton3.attribute("draggable", false);
  myButton3.mousePressed(backPage);
  myButton3.mouseOver(hoveringback);

    // PER GIF UNO : ANIMALI
    if (parameter1 > 0 && parameter1 <= 2) {
      sugg1 = createImg("./assets/ints/s-1.svg");
      sugg1.style("cursor:pointer;position:absolute");
      sugg1.size(329/1.05, 544/1.05);
      sugg1.position(40, height / 5);
      sugg1.attribute("draggable", false);
      sugg1.mousePressed(sugg1hover);
    } 
    
    else if (parameter1 > 2 && parameter1 <= 4.5) {
      sugg2 = createImg("./assets/ints/s-2.svg");
      sugg2.style("cursor:pointer;position:absolute");
      sugg2.size(329/1.05, 544/1.05);
      sugg2.position(40, height / 5);
      sugg2.attribute("draggable", false);
      sugg2.mousePressed(sugg2hover);
    }
  
    else if (parameter1 > 7) {
      sugg3 = createImg("./assets/ints/s-3.svg");
      sugg3.style("cursor:pointer;position:absolute");
      sugg3.size(329/1.05, 544/1.05);
      sugg3.position(40, height / 5);
      sugg3.attribute("draggable", false);
      sugg3.mousePressed(sugg3hover);
    }

    // PER GIF DUE : BOB
    if (parameter2 > 0 && parameter2 <= 2) {
      sugg4 = createImg("./assets/ints/s-4.svg");
      sugg4.style("cursor:pointer;position:absolute");
      sugg4.size(329/1.05, 544/1.05);
      sugg4.position(width/4 + 26, height / 5);
      sugg4.attribute("draggable", false);
      sugg4.mousePressed(sugg4hover);
    } 
    
    else if (parameter2 > 2 && parameter2 <= 4.5) {
      sugg5 = createImg("./assets/ints/s-5.svg");
      sugg5.style("cursor:pointer;position:absolute");
      sugg5.size(329/1.05, 544/1.05);
      sugg5.position(width/4 + 26, height / 5);
      sugg5.attribute("draggable", false);
      sugg5.mousePressed(sugg5hover);
    }
  
    else if (parameter2 > 7) {
      sugg6 = createImg("./assets/ints/s-6.svg");
      sugg6.style("cursor:pointer;position:absolute");
      sugg6.size(329/1.05, 544/1.05);
      sugg6.position(width/4 + 26, height / 5);
      sugg6.attribute("draggable", false);
      sugg6.mousePressed(sugg6hover);
    }

    // PER GIF TRE : FIGLI
    if (parameter3 > 0 && parameter3 <= 2) {
      sugg7 = createImg("./assets/ints/s-7.svg");
      sugg7.style("cursor:pointer;position:absolute");
      sugg7.size(329/1.05, 544/1.05);
      sugg7.position(width/2 + 13, height / 5);
      sugg7.attribute("draggable", false);
      sugg7.mousePressed(sugg7hover);
    } 
    
    else if (parameter3 > 2 && parameter3 <= 4.5) {
      sugg8 = createImg("./assets/ints/s-8.svg");
      sugg8.style("cursor:pointer;position:absolute");
      sugg8.size(329/1.05, 544/1.05);
      sugg8.position(width/2 + 13, height / 5);
      sugg8.attribute("draggable", false);
      sugg8.mousePressed(sugg8hover);
    }
  
    else if (parameter3 > 7) {
      sugg9 = createImg("./assets/ints/s-9.svg");
      sugg9.style("cursor:pointer;position:absolute");
      sugg9.size(329/1.05, 544/1.05);
      sugg9.position(width/2 + 13, height / 5);
      sugg9.attribute("draggable", false);
      sugg9.mousePressed(sugg9hover);
    }

        // PER GIF QUATTRO : PIZZA
    if (parameter4 > 0 && parameter4 <= 2) {
      sugg10 = createImg("./assets/ints/s-10.svg");
      sugg10.style("cursor:pointer;position:absolute");
      sugg10.size(329/1.05, 544/1.05);
      sugg10.position(width/1.33, height / 5);
      sugg10.attribute("draggable", false);
      sugg10.mousePressed(sugg10hover);
    } 
    
    else if (parameter4 > 2 && parameter4 <= 4.5) {
      sugg11 = createImg("./assets/ints/s-10.svg");
      sugg11.style("cursor:pointer;position:absolute");
      sugg11.size(329/1.05, 544/1.05);
      sugg11.position(width/1.33, height / 5);
      sugg11.attribute("draggable", false);
      sugg11.mousePressed(sugg11hover);
    }
  
    else if (parameter4 > 7) {
      sugg12 = createImg("./assets/ints/s-10.svg");
      sugg12.style("cursor:pointer;position:absolute");
      sugg12.size(329/1.05, 544/1.05);
      sugg12.position(width/1.33, height / 5);
      sugg12.attribute("draggable", false);
      sugg12.mousePressed(sugg12hover);
    }

  img4 = createImg("./assets/images/suggest.svg");
  img4.style("position:absolute;");
  img4.size(413.4 / 2, 121 / 2);
  img4.position(100, height - 120);

  //  PER SINTETIZZATORE VOCALE
  voice = new p5.Speech();
  voice.onLoad = voiceReady;
}
  
  //  PER SINTETIZZATORE VOCALE
function voiceReady() {
  voice.listVoices();
  voice.setVoice("Samantha");
  voice.setRate(1);
  voice.setPitch(1.3);
  voice.setLang("en-US");
  voice.speak(voiceText);
}

function draw() {
  background("#FFF44F");

  //occhi
  fill(255);
  strokeWeight(1.5);
  rect(60, height - 90, 30, 45, 15);
  //iris1
  let x2 = constrain(mouseX, 62, 72);
  let y2 = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x2, y2, 15, 20, 15 / 2);
  fill(255);
  rect(35, height - 90, 30, 45, 15);
  //iris2
  let x = constrain(mouseX, 36, 48);
  let y = constrain(mouseY, height - 87, height - 68);
  fill(0);
  rect(x, y, 15, 20, 15 / 2);

  //Return Hover
  if ((mouseX < width - 290 && mouseX < width, mouseY < height - 88)) {
    myButton.style("filter:invert(0)");
  }

  //Return Hover
  if ((mouseX < width - 300 - 50 && mouseX < width - 290, mouseY < height - 88)) {
    myButton2.style("filter:invert(0)");
  }
<<<<<<< Updated upstream
=======

    //Return Hover
    if ((mouseX < width - 555 - 100 && mouseX < width - 150, mouseY < height - 88)) {
      myButton3.style("filter:invert(0)");
    }

>>>>>>> Stashed changes
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function hoveringReload() {
  myButton2.style("filter:invert(1)");
}

function hoveringback() {
  myButton3.style("filter:invert(1)");
}

function nextPage() {
  window.open("09-Comments.html", "_self");
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function backPage() {
  window.open("07-Riassunto.html?currentUser=" +
  parameter0 +
  "&AnswerTime" +
  AT +
  "&t1=" +
  parameter1 +
  "&t2=" +
  parameter2 +
  "&t3=" +
  parameter3 +
  "&t4=" +
  frameCount / 60,
"_self"
);
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function reload() {
  setup();
  //Da aggiungere la parte del link Github prima di del nome di /03-Video.html"2022-group-project-group04/"
}

function sugg1hover() {
  sugg1h = createImg("./assets/ints/s-1-h.svg");
  sugg1h.style("cursor:pointer");
  sugg1h.size(329/1.05, 544/1.05);
  sugg1h.position(40, height / 5);
  sugg1h.attribute("draggable", false);
}

function sugg2hover() {
  sugg2h = createImg("./assets/ints/s-2-h.svg");
  sugg2h.style("cursor:pointer");
  sugg2h.size(329/1.05, 544/1.05);
  sugg2h.position(40, height / 5);
  sugg2h.attribute("draggable", false);
}

function sugg3hover() {
  sugg3h = createImg("./assets/ints/s-3-h.svg");
  sugg3h.style("cursor:pointer");
  sugg3h.size(329/1.05, 544/1.05);
  sugg3h.position(40, height / 5);
  sugg3h.attribute("draggable", false);
}

function sugg4hover() {
  sugg4h = createImg("./assets/ints/s-4-h.svg");
  sugg4h.style("cursor:pointer");
  sugg4h.size(329/1.05, 544/1.05);
  sugg4h.position(width/4 + 26, height / 5);
  sugg4h.attribute("draggable", false);
}

function sugg5hover() {
  sugg5h = createImg("./assets/ints/s-5-h.svg");
  sugg5h.style("cursor:pointer");
  sugg5h.size(329/1.05, 544/1.05);
  sugg5h.position(width/4 + 26, height / 5);
  sugg5h.attribute("draggable", false);
}

function sugg6hover() {
  sugg6h = createImg("./assets/ints/s-6-h.svg");
  sugg6h.style("cursor:pointer");
  sugg6h.size(329/1.05, 544/1.05);
  sugg6h.position(width/4 + 26, height / 5);
  sugg6h.attribute("draggable", false);
}

function sugg7hover() {
  sugg7h = createImg("./assets/ints/s-7-h.svg");
  sugg7h.style("cursor:pointer;position:absolute");
  sugg7h.size(329/1.05, 544/1.05);
  sugg7h.position(width/2 + 13, height / 5);
  sugg7h.attribute("draggable", false);
}

function sugg8hover() {
  suggh8h = createImg("./assets/ints/s-8-h.svg");
  suggh8h.style("cursor:pointer;position:absolute");
  suggh8h.size(329/1.05, 544/1.05);
  suggh8h.position(width/2 + 13, height / 5);
  suggh8h.attribute("draggable", false);
}

function sugg9hover() {
  sugg9h = createImg("./assets/ints/s-9-h.svg");
  sugg9h.style("cursor:pointer;position:absolute");
  sugg9h.size(329/1.05, 544/1.05);
  sugg9h.position(width/2 + 13, height / 5);
  sugg9h.attribute("draggable", false);
}

function sugg10hover() {
  sugg10h = createImg("./assets/ints/s-10-h.svg");
  sugg10h.style("cursor:pointer;position:absolute");
  sugg10h.size(329/1.05, 544/1.05);
  sugg10h.position(width/1.33, height / 5);
  sugg10h.attribute("draggable", false);
}

function sugg11hover() {
  sugg11h = createImg("./assets/ints/s-11-h.svg");
  sugg11h.style("cursor:pointer;position:absolute");
  sugg11h.size(329/1.05, 544/1.05);
  sugg11h.position(width/1.33, height / 5);
  sugg11h.attribute("draggable", false);
}

function sugg12hover() {
  sugg12h = createImg("./assets/ins/s-12-h.svg");
  sugg12h.style("cursor:pointer;position:absolute");
  sugg12h.size(329/1.05, 544/1.05);
  sugg12h.position(width/1.33, height / 5);
  sugg12h.attribute("draggable", false);
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
