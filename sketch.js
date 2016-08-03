function setup() {
  createCanvas(1000, 750);
  x = 255;
  left = PI+HALF_PI;
  right = 0;
  rotateLeft = true;
  noStroke();
}

function draw() {
  background(32, 95, 153);
  noStroke();
  fill(255);
  ellipse(502, 371, 30, 30);
  
  noFill();
  stroke(255,255,255,x);
  strokeWeight(5);
  arc(width/2, height/2, 100, 100, left, right);
  arc(width/2, height/2, 170, 170, left, right);
  arc(width/2, height/2, 240, 240, left, right);
  
  fill(255);
  noStroke();
  textSize(20);
  textFont("Helvetica");
  text("Detecting Wifi...", 430, 420);
  
  x = x - 2.4;
  
  
  if (left < PI-0.1) {
    rotateLeft = false;
    x = 300;
  }
  else if (right > 0.1) {
    rotateLeft = true;
    x = 300;
  }
  if (rotateLeft === true) {
    left = left - 0.015;
    right = right - 0.015;
  }
  else if (rotateLeft === false) {
    left = left + 0.015;
    right = right + 0.015;
  }
}
