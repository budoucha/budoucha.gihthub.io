function preload() {
  imageMode(CENTER);
  //button = loadImage(".png");
  pixelDensity(1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  short = min(width, height);
  long = max(width, height);
  hgrid = width / 8;
  vgrid = height / 8;
  tsize = short / 8;
}

function draw() {
  background(255);
  push();
  translate(width / 2, height / 2);
  fill(0);
  textSize(tsize);
  textAlign(CENTER, CENTER);
  text("hoge", 0, 0);
  pop();
  update();
}

function update() {
}

function windowResized() {
  setup();
}