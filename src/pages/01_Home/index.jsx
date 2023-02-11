import './styles.css';
import TypeOut from 'react-typeout';
import { useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import  NextPageHandler from '../../utils/NextPageHandler';

const Spiral = () => {
  const words = ["Hello, stranger", "press space to continue..."];
  // const navigate = useNavigate();
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => { navigate('/spiral') });
  // }, []);
  return (
    <div>
      <TypeOut words={words} />
      <NextPageHandler nextPageUrl='/spiral' />
    </div>
  );
}



export default Spiral;