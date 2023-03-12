import { useNavigate } from 'react-router-dom';
import './styles.css';
import starSpiral from '../../p5js/08_Polar_perlin/sketch.js'
import P5Wrap from '../../components/p5wrap';
import secrets from '../../secrets';
import AnswerField from '../../components/AnswerField';
import PropTypes from 'prop-types';

const PolarPerlin = ({ next }) => {
  const navigate = useNavigate();
  const effectMatrix = {
    "0": "",
    "HELP": "Yes yes. Help me!",
    "NUMBER": () => navigate(`/${next}`),
  }

  return (
    <div>
      <span className='whatemi'>what am I?</span>
      <P5Wrap fn={starSpiral} />
      <AnswerField effectMatrix={effectMatrix} logUrl={secrets.loggerUrl}/>
    </div>
  );
}

PolarPerlin.propTypes = {
  next: PropTypes.string.isRequired,
}

export default PolarPerlin;