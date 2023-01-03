// Sketch linked to secondary HTML page (page.html)

let urlString = window.location.href; // Collect the url
let url = new URL(urlString); // Create a machine-readable object

let parameter1 = url.searchParams.get("t1"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter2 = url.searchParams.get("t2"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter3 = url.searchParams.get("t3"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter4 = url.searchParams.get("t4"); // Parse the URL object to find a parameter called "Count" and retrieve its value
let parameter0 = url.searchParams.get("currentUser");
//let AT = url.searchParams.get("AnswerTime");

let video2;
let img3;
let myHover;
let myButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color('#CF82FE'));

  //rectMode(CENTER);

  delphE = createElement("h1");
  delphE.html("Delph*E");
  delphE.style(
    "position:absolute; left: 50px; top: 35px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  video2 = createCapture(VIDEO);
  video2.hide();

  myButton = createImg("./assets/images/more.svg");
  myButton.style("position: absolute; cursor:pointer;");
  myButton.size(290, 45);
  myButton.position(width - 290, height - 88);
  myButton.attribute("draggable", false);
  myButton.mousePressed(nextPage);
  myButton.mouseOver(hovering);
}

function draw() {

  fill(255);
  strokeWeight(4.5);
  rect(60, height - 850, 1001/1.25, 742/1.25);

  image(video2, 60, height - 850, 1001/1.25, 742/1.25);

  fill(255);
  strokeWeight(2);
  rect(935, height - 850, 1001/1.25, 742/1.25, 30);

  fill('#68F6FF');
  strokeWeight(2);
  rect(960, height - 820, 1001/1.33, 50, 30);

  fill('#FFFFFF');
  strokeWeight(2);
  rect(960, height - 740, 1001/1.33, 190, 30);

  fill('#FFFFFF');
  strokeWeight(2);
  rect(960, height - 520, 1001/1.33, 230, 30);


  textname = createElement("h1");
  textname.html('name');
  textname.style(
    "position:absolute; left: 990px; top: 215px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 500;"
  );

  text1 = createElement("h1");
  text1.html(round(parameter1, 2));
  text1.style(
    "position:absolute; left: 990px; top: 305px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  text2 = createElement("h1");
  text2.html(round(parameter2, 2));
  text2.style(
    "position:absolute; left: 990px; top: 345px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  text3 = createElement("h1");
  text3.html(round(parameter3, 2));
  text3.style(
    "position:absolute; left: 990px; top: 385px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  text4 = createElement("h1");
  text4.html(round(parameter4, 2));
  text4.style(
    "position:absolute; left: 990px; top: 425px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );

  text5 = createElement("h1");
  text5.html(round(parameter0, 2));
  text5.style(
    "position:absolute; left: 990px; top: 535px; text-align: left; font-family:'Clash Display'; font-size:24px; font-weight: 400;"
  );


  img3 = createImg("./assets/images/here-you-go.svg");
  img3.style("position:absolute;");
  img3.size(613 / 1.34, 119 / 1.34);
  img3.position(10, height - 190);

  //occhi
  fill(255);
  strokeWeight(2);
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
    if ((mouseX < width - 290, mouseY < height - 88)) {
      myButton.style("filter:invert(0)");
    }
  
}

function hovering() {
  myButton.style("filter:invert(1)");
}

function nextPage() {
  window.open("07-Consigli.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



