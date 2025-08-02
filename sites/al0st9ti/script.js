// Double Pendulum Simulation using p5.js

let angle1 = PI/2;
let angle2 = PI/2;
let aVelocity1 = 0;
let aVelocity2 = 0;
let aAcceleration1 = 0;
let aAcceleration2 = 0;

let length1 = 150;
let length2 = 150;
let mass1 = 10;
let mass2 = 10;
let gravity = 1;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(width/2, 100);

  // Calculate forces
  aAcceleration1 = (-gravity * (2 * mass1 + mass2) * sin(angle1) - mass2 * gravity * sin(angle1 - 2 * angle2) - 2 * sin(angle1 - angle2) * mass2 * (aVelocity2 * aVelocity2 * length2 + aVelocity1 * aVelocity1 * length1 * cos(angle1 - angle2)) ) / (length1 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 * angle2)));
  aAcceleration2 = (2 * sin(angle1 - angle2) * (aVelocity1 * aVelocity1 * length1 * (mass1 + mass2) + gravity * (mass1 + mass2) * cos(angle1)) ) / (length2 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 * angle2)));

  // Update angles
  aVelocity1 += aAcceleration1;
  aVelocity2 += aAcceleration2;
  angle1 += aVelocity1;
  angle2 += aVelocity2;
  
  // Dampening
  aVelocity1 *= 0.995;
  aVelocity2 *= 0.995;

  // Calculate positions
  x1 = length1 * sin(angle1);
  y1 = length1 * cos(angle1);
  x2 = x1 + length2 * sin(angle2);
  y2 = y1 + length2 * cos(angle2);

  // Draw pendulum
  stroke(0);
  strokeWeight(2);
  line(0, 0, x1, y1);
  fill(175);
  ellipse(x1, y1, mass1 * 2, mass1 * 2);
  line(x1, y1, x2, y2);
  fill(175);
  ellipse(x2, y2, mass2 * 2, mass2 * 2);
}