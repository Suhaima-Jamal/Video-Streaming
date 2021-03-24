/*capturing

var video;

function setup() {
createCanvas(640,480);
  background(50);
    //createCapture(VIDEO);
    
video=createCapture(VIDEO);
    video.size(640,480);
    //video.hide();
}

function draw() {
 tint(255,0,150);  
 image(video,0,0,mouseX,height);
}*/


function setup() {
  createCanvas(640, 480);
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}