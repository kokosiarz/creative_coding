import { useNavigate } from 'react-router-dom';
import './styles.css';
import starSpiral from '../../p5js/08_Polar_perlin/sketch.js'
import P5Wrap from '../../components/p5wrap';
import secrets from '../../secrets';
import AnswerField from '../../components/AnswerField';

const Spiral = () => {
  const navigate = useNavigate();
  const effectMatrix = {
    "SOS": "I am not that simple",
    "S.O.S": "I this some kind of code?",
    "SPACE": "Space is for astronauts",
    "SPIRAL": "Spiral? What spiral? Spiral is not enough",
    "GALA": "Galaxy? What is it with you and galaxies?",
    "HELP": "Look up. Or down. Or left. Or right. Or anywhere",
    "MILES": "Don't trust headlines. BIG LETTERS rarely tell the truth",
    "ZERO": () => navigate('/hector'),
  }

  return (
    <div>
      <span className='whatemi'>what am I?</span>
      <P5Wrap fn={starSpiral} />
      <AnswerField effectMatrix={effectMatrix} logUrl={secrets.loggerUrl}/>
    </div>
  );
}

export default Spiral;