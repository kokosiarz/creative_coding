function setup() {
  createCanvas(windowWidth, windowHeight);
  a = min(windowWidth, windowHeight);
  // createCanvas(a, a);
  setLineDash([2,5,2,5,2,15,10,4,10,4,10,15,2,5,2,5,2,25]);
  stroke(255);
  strokeWeight(2);
  noFill();
}

const sosDash = [2,5,2,5,2,15,7,3,7,3,7,15,2,5,2,5,2,25];
const binarySos = sosDash.reduce((acc, curr, i) => i % 2 === 0
    ? [...acc, ...Array(curr).fill(1)]
    : [...acc, ...Array(curr).fill(0)]
 , []);
let initial_a = 0;

function draw() {
  h = min(width, height);
  background(30);
  translate(width/2, height/2);
  beginShape();
  let r = height/200 + sin(initial_a);
  let i = 0
  for (let a=initial_a; a<TWO_PI*25.1+initial_a; a+=0.002) {
    //TODO: replace for with spiral length
    r=r + (0.003*h)/500
    let x = r*cos(a);
    let y = r*sin(a);
    vertex(x, y);
    // r = r * r*cos(a)
  }
  endShape();
  // initial_a = initial_a - 0.005;
  if (initial_a < -TWO_PI*30) {
    initial_a = 0;
  }
}


console.log(binarySos);

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
