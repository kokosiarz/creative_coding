/* eslint-disable react/prop-types */
import { useEffect, useRef, useId } from 'react';
import p5 from 'p5';

export const P5Wrapper = ({id, fn}) => {
  id = id || `${useId()}-p5Wrapper`;
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;
      new p5(fn(id));
    }
  }, []);

  return <div id={id} />;
};

export default P5Wrapper;