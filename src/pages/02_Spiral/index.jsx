import './styles.css';
import {ReactP5Wrapper} from 'react-p5-wrapper';
import sketch from '../../p5js/05a_spiral-SOS-counter/sketch.js'
import TypeOut from 'react-typeout';

const Spiral = () => {
  const words = ["         ","Miles to go", "before I sleep", "you've let me down","no reason for me to stay here"];
  return (
    <div className="App">
      <ReactP5Wrapper sketch={sketch}>
        <div className='typer-wrapper'>
          <h4>
            <TypeOut words={words} />
          </h4>
        </div>
      </ReactP5Wrapper>
    </div>
  );
}

export default Spiral;