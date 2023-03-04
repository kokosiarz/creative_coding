import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import starSpiral from '../../p5js/05a_spiral-SOS-counter/sketch.js'
import P5Wrap from '../../components/p5wrap';
import TypeOut from 'react-typeout';
import sound from "./acna_malas.mp3";
import image from "../../bin/whereami.jpg"
import secrets from '../../secrets';
import AnswerField from '../../components/AnswerField';

const Spiral = () => {
  const navigate = useNavigate();
  const [showSalamanca, setShowSalamanca] = useState("");    
  const words = ["         ", "Miles to go", "before I sleep", "you've let me down", "no reason for me to stay here"];
  
  const effectMatrix = {
    "SOS": "I am not that simple",
    "S.O.S": "I this some kind of code?",
    "SPACE": "Space is for astronauts",
    "SPIRAL": "Spiral? What spiral? Spiral is not enough",
    "GALA": "Galaxy? What is it with you and galaxies?",
    "HELP": "Look up. Or down. Or left. Or right. Or anywhere",
    "MILES": "Don't trust headlines. BIG LETTERS rarely tell the truth",
    "STAR": () => window.solidSpiral = true,
    "SALAMANCA": () => navigate('/prize'),
    "STARSPIRAL": () => setShowSalamanca(true),
    "STAR SPIRAL": () => setShowSalamanca(true),
  }

  return (
    <div>
      <TypeOut words={words} />
      <P5Wrap fn={starSpiral} />
      <AnswerField effectMatrix={effectMatrix} logUrl={secrets.loggerUrl}/>
      <audio src={sound} autoPlay loop />
      {showSalamanca && <div className="popup">
        Where am I?
        <img src={image} width="100%" height="100%" />
      </div>}
      <div className="hint">What is this? ...starsomething?</div>
    </div>
  );
}

export default Spiral;