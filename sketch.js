var mic;
let img_resting;

function preload() {
  img_resting = loadImage('images/face_resting.png');
  img_question = loadImage('images/question-face.png');
  img_happy = loadImage('images/happy-face.png');
  img_heart = loadImage('images/heart-face.png');
  img_main = loadImage('images/bot_separated-all.png');
}


function setup(){
// background(7, 20, 48);
createCanvas(windowWidth,windowHeight);
mic = new p5.AudioIn();
mic.start();
}


function draw(){

var vol = mic.getLevel();
noStroke();
// fill(7, 20, 48);
rect(width/2, 450, vol * 300, 150);
rect(width/2, 450, vol * -300, 150);
// console.log(vol);
image(img_main,163,0, 1200,900);

  if (keyCode === 83) {
    console.log("S");
      image(img_question, 163, 0, 1200, 897);
  } else if (keyCode === 68) {
    console.log("D");
      image(img_happy, 163, 0, 1200, 897);
  }else if (keyCode === 70) {
    console.log("F");
      image(img_heart, 163, 0, 1200, 897);
  } else{
      image(img_resting, 163, 0, 1200, 897);
  }
}
