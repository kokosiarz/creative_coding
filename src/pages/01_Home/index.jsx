import './styles.css';
import TypeOut from 'react-typeout';
import { useState } from 'react';
// import  ForwardNavigator from '../../utils/ForwardNavigator';
import { useNavigate } from 'react-router-dom';

const Spiral = () => {
  const navigate = useNavigate();
  const words = ["","Hello, stranger", "KOKOS has a riddle for you", "Type OK when ready","PS: you may enjoy it more with sound turned on"];
  const [answer, setAnswer] = useState("");
  const handleChange = (e) => {
    setAnswer(e.target.value);
    if (e.target.value === "OK" || e.target.value === "ok") {
      navigate('/hector')
    }  
  } 
  return (
    <div className='greetingContainer'>
      <TypeOut words={words} />
      <input type="text" name="name" className='answer' value={answer} onChange={handleChange} autoFocus/>      
      {/* <ForwardNavigator url='/spiral' /> */}

    </div>
  );
}



export default Spiral;