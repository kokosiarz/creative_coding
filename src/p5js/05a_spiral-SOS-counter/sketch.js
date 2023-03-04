const sketch = ( parentId ) => ( s ) => {
  s.setup = () => {
    let kanwa = s.createCanvas();
    let parent = document.getElementById(parentId)    
    kanwa.parent( parentId );
    window.onresize = () => {
      s.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
    }
    s.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
    s.frameRate(24);
    s.stroke(255);
    s.strokeWeight(1,5);
    s.noFill();
  }

  const sosDash = [2,5,2,5,2,15,7,3,7,3,7,15,2,5,2,5,2,25];
  const binarySos = sosDash.reduce((acc, curr, i) => i % 2 === 0
      ? [...acc, ...Array(curr).fill(1)]
      : [...acc, ...Array(curr).fill(0)]
  , []);
  let rotation = 0;
  const rotationSpeed = 0.005;
  // const solid = params && params.solid

  s.draw = () => {
    let h = Math.min(s.width, s.height);
    s.background(30);
    s.translate(s.width/2, s.height/2);
    let r = h/200;
    // for every angle
    const angularStep = 0.0005*h/100;
    for (let a=0; a<s.TWO_PI*25; a+=angularStep) {
      r = s.TWO_PI + a*4
      let x = r*s.cos(a+rotation);
      let y = r*s.sin(a+rotation);
      if (window.solidSpiral && Math.random() < 0.07) {
        s.point(x, y); 
      } else if (binarySos[Math.floor(-(a**2) - rotation*100) % binarySos.length] === 1) {
        s.point(x, y);      
      }
    }
    rotation = rotation - rotationSpeed;
    if (rotation < -s.TWO_PI*30) {
      rotation = 0;
    }
  }
}

export default sketch;
