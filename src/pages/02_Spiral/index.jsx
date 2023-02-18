import './styles.css';
// import { ReactP5Wrapper } from 'react-p5-wrapper';
import { useState } from 'react';
import starSpiral from '../../p5js/05a_spiral-SOS-counter/sketch.js'
import P5Wrap from '../../components/p5wrap';
import TypeOut from 'react-typeout';
import sound from "./acna_malas.mp3";
import image from "../../bin/whereami.jpg"
import { useNavigate } from 'react-router-dom';

const Spiral = () => {
  const navigate = useNavigate();
  const words = ["         ", "Miles to go", "before I sleep", "you've let me down", "no reason for me to stay here"];
  const [answer, setAnswer] = useState("");
  // const [solid, setSolid] = useState(false);
  const handleChange = (e) => {
    setAnswer(e.target.value);
    let ans = e.target.value.toUpperCase();
    if (ans=== "SOS") {
      alert("I am not that simple");
    }
    if (ans === "S.O.S.") {
      alert("I this some kind of code?");
    }
    if (ans === "SPACE") {
      alert("Space is for astronauts");
    }
    if (ans === "SPIRAL") {
      alert("Spiral? What spiral? Spiral is not enough");
    }
    if (ans === "GALA") {
      alert("Galaxy? What is it with you and galaxies?");
    }
    if (ans === "HELP") {
      alert("Look up.");
      alert("Or down. Or left. Or right. Or anywhere");
    }
    if (ans === "STAR") {
      window.solidSpiral = true;
    }
    if (ans === "SALAMANCA") {
      navigate('/prize')
    }  
    
  }
  return (
    <div>
      <TypeOut words={words} />
      <P5Wrap fn={starSpiral}/>
      <input type="text" name="name" className='answer' value={answer} onChange={handleChange} autoFocus/>
      <audio src={sound} autoPlay loop/>
      {(answer === "starspiral" || answer === "star spiral") && <div className="popup">
        Where am I?
        <img src={image} width="100%" height="100%"/>
      </div>}
      <div className="hint">What is this? ...starsomething?</div>
    </div>
  );
}

export default Spiral;