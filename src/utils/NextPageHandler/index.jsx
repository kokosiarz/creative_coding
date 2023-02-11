import { useEffect } from 'react';
import {  useNavigate } from "react-router-dom";

const Spiral = ({ nextPageUrl }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("keydown", (e) => { navigate('/spiral') });
  }, []);
}

export default Spiral;