import './styles.css';
import Confetti from 'react-confetti'

// import TypeOut from 'react-typeout';
// import { useState } from 'react';
// // import  ForwardNavigator from '../../utils/ForwardNavigator';
// import { useNavigate } from 'react-router-dom';

const Spiral = () => {
  return (
    <div className='prize'>
      <br/>
      GREAT SUCCESS!<br/>
      <br/>
      You have beaten the riddle.<br/>
      <br/>
      For now it is the last one, but there will be more. Soon.<br/>
      <br/>
      In honour of your grit and patience, you are granted with pre-premiere
      access to track SALAMANCA, that will be released on 31.03.23 <br/>
      <br/>
      Here is the link to the track: <a href='https://drive.google.com/file/d/1YKvAJ68QrvtWVrosHyEZjtDrhQGXRFbE/view?usp=share_link'>SALMANCA</a> <br/>
      <br/>
      It is the song that I played for you when you watched my SOS spiral. <br/>
      <br/>
      But at normal speed. Haha. <br/>
      <br/>
      I hope you will enjoy it. <br/>
      <br/>
      <br/>
      <br/>      
      XOXO - KOKOS
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
      />
    </div>
    
  );
}



export default Spiral;