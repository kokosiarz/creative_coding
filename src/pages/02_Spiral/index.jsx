import './styles.css';
// import { ReactP5Wrapper } from 'react-p5-wrapper';
import spiral from '../../p5js/05a_spiral-SOS-counter/sketch.js'
import P5Wrap from '../../components/p5wrap';
import TypeOut from 'react-typeout';

const Spiral = () => {
  const words = ["         ", "Miles to go", "before I sleep", "you've let me down", "no reason for me to stay here"];

  return (
    <>
      <TypeOut words={words} />
      <P5Wrap fn={spiral}/>
    </>
  );
}

export default Spiral;