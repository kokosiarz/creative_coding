import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForwardNavigator = ({ url }) => {
  const navigate = useNavigate();
  // const { ref } = useSwipeable({
  //   onSwiped: () => { console.log('swiped!'); navigate(url); },
  // });
  // ref(document);
  useEffect(() => {
    document.addEventListener('keydown', (e) => { if (e.keyCode === 32) { navigate(url); } });
    document.addEventListener('touchstart', () => { navigate(url); });
  }, []);
};

export default ForwardNavigator;
