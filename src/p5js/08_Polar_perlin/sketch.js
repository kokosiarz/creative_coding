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

  // const solid = params && params.solid
  let phase = 0;
  let zoff = 0;
  // let slider;
  s.draw = () => {
    let m = Math.min(s.width, s.height);
    s.background(0);
    s.translate(s.width / 2, s.height / 2);
    s.stroke(255);
    s.strokeWeight(2);
    s.noFill();
    s.beginShape();
    s.background(30);
    //12; // s.cos(a);// slider.value();
    for (let a = 0; a < s.TWO_PI; a += s.radians(1)) {
      let noiseMax =  255
      console.log(noiseMax)
      let xoff = s.map(s.cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = s.map(s.sin(a + phase), -1, 1, 0, noiseMax);
      let r = s.map(s.noise(xoff, yoff, zoff), 0, 1, 1.1 * m/6, m/6);
      let x = r * s.cos(a);
      let y = 1.7 * r * s.sin(a);
      s.vertex(x, y);
    }
    s.endShape(s.CLOSE);
    phase += 0.0015;
    zoff += 0.01;
  }
}

export default sketch;
