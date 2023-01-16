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
  text(content, width / 2 - 325, height / 2 - 125, width / 2 - 100, height);

}
"think you know yourself better than me? Oh shut up! I know everything about you. I’ve been watching you the whole time and, according to your profile, the advice that I’ve given perfectly matches your personality. If you don’t agree... well... I don’t care!"

function keyTyped() {

  keyCount++;
  console.log(keyCount);

  if (keyCount == 1) {
    content += "L";
    fakeText.hide();
  }

  if (keyCount == 2) {
    content += "O";
  }

  if (keyCount == 3) {
    content += "L. ";
  }

  if (keyCount == 4) {
    content += "D";
  }

  if (keyCount == 5  || keyCount == 18  || keyCount == 69  || keyCount == 92  || keyCount == 116  || keyCount == 129  || keyCount == 138  || keyCount == 175) {
    content += "i";
  }

  if (keyCount == 6) {
    content += "d ";
  }

  if (keyCount == 7  || keyCount == 21  || keyCount == 28  || keyCount == 66  || keyCount == 77  || keyCount == 95  || keyCount == 121  || keyCount == 146  || keyCount == 163  || keyCount == 180) {
    content += "y";
  }

  if (keyCount == 8  || keyCount == 22 || keyCount == 26 || keyCount == 29 || keyCount == 60 || keyCount == 74 || keyCount == 78 || keyCount == 96 || keyCount == 103 || keyCount == 113 || keyCount == 122 || keyCount == 127 || keyCount == 147 || keyCount == 164 || keyCount == 171 || keyCount == 181 || keyCount == 184 || keyCount == 200) {
    content += "o";
  }

  if (keyCount == 9 || keyCount == 23 || keyCount == 97 || keyCount == 148 || keyCount == 182) {
    content += "u ";
  }

  if (keyCount == 10 || keyCount == 31 || keyCount == 65 || keyCount == 114 || keyCount == 126 || keyCount == 151 || keyCount == 169 || keyCount == 189 || keyCount == 205) {
    content += "r";
  }

  if (keyCount == 11 || keyCount == 33 || keyCount == 37 || keyCount == 40 || keyCount == 47 || keyCount == 62 || keyCount == 64 || keyCount == 84 || keyCount == 85 || keyCount == 150 || keyCount == 153 || keyCount == 161 || keyCount == 168 || keyCount == 190 || keyCount == 191 || keyCount == 194 || keyCount == 206) {
    content += "e";
  }

  if (keyCount == 12 || keyCount == 44 || keyCount == 72 || keyCount == 88 || keyCount == 107 || keyCount == 110 || keyCount == 135 || keyCount == 143 || keyCount == 173 || keyCount == 187 || keyCount == 204) {
    content += "a";
  }

  if (keyCount == 13 || keyCount == 14 || keyCount == 34 || keyCount == 104 || keyCount == 130 || keyCount == 156 || keyCount == 174 || keyCount == 195 || keyCount == 196) {
    content += "l";
  }

  if (keyCount == 15 || keyCount == 157) {
    content += "y ";
  }

  if (keyCount == 16 || keyCount == 38 || keyCount == 39 || keyCount == 42  || keyCount == 67 || keyCount == 89 || keyCount == 98 || keyCount == 119 || keyCount == 132 || keyCount == 155 || keyCount == 176) {
    content += "t";
  }

  if (keyCount == 17 || keyCount == 43 || keyCount == 52 || keyCount == 68 || keyCount == 91 || keyCount == 99 || keyCount == 102 || keyCount == 133 || keyCount == 160) {
    content += "h";
  }

  if (keyCount == 19  || keyCount == 25 || keyCount == 59 || keyCount == 70 || keyCount == 93 || keyCount == 108 || keyCount == 117 || keyCount == 172) {
    content += "n";
  }

  if (keyCount == 20) {
    content += "k ";
  }

  if (keyCount == 24 || keyCount == 58) {
    content += "k";
  }

  if (keyCount == 27 || keyCount == 61) {
    content += "w ";
  }

  if (keyCount == 30 || keyCount == 53 || keyCount == 75 || keyCount == 123 || keyCount == 165) {
  content += "u";    
  }

  if (keyCount == 32 || keyCount == 51 || keyCount == 170) {
  content += "s";    
  }

  if (keyCount == 35 || keyCount == 179) {
  content += "f ";    
  }

  if (keyCount == 36 || keyCount == 73 || keyCount == 83) {
  content += "b";    
  }
    
  if (keyCount == 41 || keyCount == 124 || keyCount == 166) {
  content += "r ";    
  }
    
  if (keyCount == 45 || keyCount == 86) {
  content += "n ";    
  }
    
  if (keyCount == 46) {
  content += "m";    
  }

  if (keyCount == 48) {
  content += "? ";    
  }

  if (keyCount == 49) {
  content += "O";    
  }

  if (keyCount == 50) {
  content += "h ";    
  }

  if (keyCount == 54 || keyCount == 76 || keyCount == 186  || keyCount == 202) {
  content += "t ";    
  }

  if (keyCount == 55) {
  content += "up";    
  }

  if (keyCount == 56 || keyCount == 207) {
  content += "! ";    
  }

  if (keyCount == 57  || keyCount == 141  || keyCount == 198) {
  content += "I ";    
  }

  if (keyCount == 63  || keyCount == 81  || keyCount == 137  || keyCount == 144) {
  content += "v";    
  }

  if (keyCount == 71  || keyCount == 94 || keyCount == 118) {
  content += "g ";    
  }

  if (keyCount == 79) {
  content += "u. ";    
  }
  
  if (keyCount == 80) {
  content += "I'";    
  }
  
  if (keyCount == 82 || keyCount == 100 || keyCount == 105 || keyCount == 134 || keyCount == 140 || keyCount == 145) {
  content += "e ";    
  }
  
  if (keyCount == 87 || keyCount == 101 || keyCount == 193) {
  content += "w";    
  }

  if (keyCount == 90 || keyCount == 111 || keyCount == 112 || keyCount == 139 || keyCount == 154 || keyCount == 159 || keyCount == 203) {
  content += "c";    
  }

  if (keyCount == 106) {
  content += "time ";    
  }

  if (keyCount == 109) {
  content += "d, ";    
  }

  if (keyCount == 115 || keyCount == 136 || keyCount == 183 || keyCount == 199) {
  content += "d";    
  }

  if (keyCount == 120) {
  content += "o ";    
  }
  
  if (keyCount == 125 || keyCount == 149 || keyCount == 167) {
  content += "p";    
  }
   
  if (keyCount == 128 || keyCount == 152) {
  content += "f";    
  }
 
  if (keyCount == 131) {
  content += "e, ";    
  }

  if (keyCount == 142 || keyCount == 188) {
  content += "g";    
  }

  if (keyCount == 158) {
  content += "mat";    
  }
        
  if (keyCount == 162) {
  content += "s ";    
  }

  if (keyCount == 177) {
  content += "y. ";    
  }
        
  if (keyCount == 178) {
  content += "I";    
  }

  if (keyCount == 185 || keyCount == 201) {
  content += "n'";    
  }
          
  if (keyCount == 192 || keyCount == 197) {
  content += "... "; 
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
  window.open("10-Info.html", "_self");
}

function home() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}