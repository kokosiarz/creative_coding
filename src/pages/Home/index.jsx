import './styles.css';
import TypeOut from 'react-typeout';
import { useState } from 'react';
import SeamlesAudioLoop from '../../utils/SeamlessAudioLoop';
import sound from './menu.mp3';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// seamlesAudioLoop(sound);

const Home = ({next, help}) => {
  const navigate = useNavigate();
  const words = ["","Hello, stranger", "KOKOS has a riddle for you", "Type OK when ready","If you feel lost type: HELPME","PS: you may enjoy it more with sound turned on"];
  const [answer, setAnswer] = useState("");
  const handleChange = (e) => {
    setAnswer(e.target.value);
    if (e.target.value.toUpperCase() === "OK") {
      navigate(`/${next}`)
    }
    if (e.target.value.toUpperCase() === "HELPME") {
      navigate(`/${help}`)
    }  
  } 
  return (
    <div className='greetingContainer'>
      {/* <audio src={sound} autoPlay loop />       */}
      <SeamlesAudioLoop sound={sound}/>
      <TypeOut words={words} />
      help?
      <input type="text" name="name" className='answer' value={answer} onChange={handleChange} autoFocus/>      
      {/* <ForwardNavigator url='/spiral' /> */}

    </div>
  );
}

Home.propTypes = {
  next: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
}

export default Home;