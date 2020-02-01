var mic;
let img_resting;
let faces = {}

const showFace = face => {
  const keys = Object.entries(faces)
  for (const key of keys) {
    face === key[0]
      ? key[1].classList.add('show')
      : key[1].classList.remove('show')
    
  }
}

document.addEventListener('keydown', e => {
  if (e.keyCode === 83) {
    showFace('question')
  }
  if (e.keyCode === 68) {
    showFace('happy')
  }
  if (e.keyCode === 70) {
    showFace('heart')
  }
})

document.addEventListener('keyup', e => {
  showFace('resting')
})

window.onload = () => {
  faces = {
    resting: document.querySelector('.face__resting'),
    question: document.querySelector('.face__question'),
    happy: document.querySelector('.face__happy'),
    heart: document.querySelector('.face__heart'),
  }
  showFace('resting')
}


function setup(){
  createCanvas(windowWidth,windowHeight);
}


function draw(){
  if (mic) {
    var vol = mic.getLevel();
    noStroke();
    clear()
    rect( (width / 2) - 1, (window.innerHeight / 2) - 50, vol * 300, 150);
    rect( width / 2, (window.innerHeight / 2) - 50, vol * -300, 150);
    fill(7, 20, 48);
  }
}


function touchEnded() {
  mic = new p5.AudioIn(() => {
    console.log('Why')
  });
  mic.start();
  console.log(mic)
}