const sketch = ( parentId ) => ( s ) => {
  s.setup = () => {
    console.log('setup');
    let kanwa = s.createCanvas();
    let parent = document.getElementById(parentId)    
    kanwa.parent( parentId );
    window.onresize = () => {
      s.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
      console.log('resize');
    }
    s.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
    s.frameRate(24);
    s.stroke(255);
    s.strokeWeight(0.7);
    s.noFill();
  }

  const sosDash = [2,5,2,5,2,15,7,3,7,3,7,15,2,5,2,5,2,25];
  const binarySos = sosDash.reduce((acc, curr, i) => i % 2 === 0
      ? [...acc, ...Array(curr).fill(1)]
      : [...acc, ...Array(curr).fill(0)]
  , []);
  let rotation = 0;
  const rotationSpeed = 0.005;

  s.draw = () => {
    let h = Math.min(s.width, s.height);
    s.background(30);
    s.translate(s.width/2, s.height/2);
    let r = s.height/200;
    for (let a=rotation; a<s.TWO_PI*30+rotation; a+=0.0005*s.height/200) {
      r=r + (0.005*h)/500
      let x = r*s.cos(a);
      let y = r*s.sin(a);
      if (binarySos[Math.floor(-2*r*r/30 - rotation*110) % binarySos.length] === 1) {
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
