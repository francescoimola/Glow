let maxDiameter;
let theta;
let distribution = new Array(1000);
let fade;
let fadeAmount = 1;
let rot = 50;
let speed = 50;
let ray;
let bkg;
let interval = 20;
let cfade;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120)
  maxDiameter = 500;
  theta = 0;
  fade = 0;
  bkg = color(46, 127, 229)
  background(bkg)

  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0, 15));
  }

}

function draw() {
  noStroke();
  let ewidth = width / 2;
  let eheight = height / 2;
  let c = color(253, 184, 19);
  cfade = color(253, 184, 19, fade);
  // calculate the diameter of the circle 
  let diam = height / 4 + sin(theta) * maxDiameter;

  // draw the circle 
  stroke(c);
  ellipse(ewidth, eheight, diam, diam);

  // draw sunrays
  translate(width / 2, height / 2);

  makeRays();

  theta += 0.008;

  if(frameCount % (interval * 30) == 0){
    background(bkg);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function makeRays() {
  for (let i = 0; i < distribution.length; i++) {
    rotate(TWO_PI / distribution.length);
    stroke(cfade);
    let dist = abs(distribution[i]) * 10;
    rotate(rot +=speed);
    ray = line(0, 0, dist, 0);
  }

  if (fade < 0) fadeAmount = 0.0001;
  if (fade > 255) fadeAmount = -10;
  fade += fadeAmount;
}

function mousePressed() {
  clear();
  background(bkg);
}