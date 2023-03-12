import './styles.css';

import PropTypes from 'prop-types';

const Helpme = () => {
  return (
    <div className='prize'>
      <br/>
      HELP YOU?<br/>
      <br/>
      Only you can help yourself<br/>
      Look everywhere<br/>
      <br/>
      You will find your answers<br/>
      They might be hidden<br/>
      In the plane sight<br/>
      <br/>
      Use your curiosity<br/>
      Use your imagination<br/>
      Use your OCD <br/>
      <br/>
      Ask for a hint if you need it<br/>
      <br/>
      Place your cursor in the white input<br/>
      Type what comes to mind<br/>
      Start with OK<br/>
      <br/>
      Dont let go easily<br/>
      <br/>
      Or do, if you feel like it<br/>
      <br/>
      <a href={`/`}>Go back</a>
    </div>
    
  );
}

Helpme.propTypes = {
  next: PropTypes.string.isRequired,
}


export default Helpme;