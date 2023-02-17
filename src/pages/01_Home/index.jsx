import './styles.css';
import TypeOut from 'react-typeout';
import  ForwardNavigator from '../../utils/ForwardNavigator';

const Spiral = () => {
  const words = ["","Hello, stranger", "to navigate forward", "press SPACEBAR"];
  return (
    <div className='greetingContainer'>
      <TypeOut words={words} />
      <ForwardNavigator url='/spiral' />
    </div>
  );
}



export default Spiral;