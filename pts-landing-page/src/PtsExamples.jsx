import React, { useCallback, useState, useMemo } from "react";
import { Pt, Group, Line, Create, Sound, Triangle, Const, Geom } from "pts";
import { PtsCanvas } from "react-pts-canvas";
import shape from "@material-ui/core/styles/shape";

/**
 * Animation example component
 * @returns 
 */
export const AnimationExample = ({name, background, play}) => {
  const [noiseGrid, setNoiseGrid] = useState([]);

  const handleAnimate = useCallback((space, form, time) => {
    if (!space) return;
    // Use pointer position to change speed
    let speed = space.pointer.$subtract( space.center ).divide( space.center ).abs();
    // speed = [speed[0]/2, speed[1]/2]
    // console.log(speed)
    // Generate noise in a grid
    noiseGrid.forEach( (p) => {
      p.step( 0.01*(1-speed.x), 0.01*(1-speed.y) );
      form.fillOnly("#123").point( p, Math.abs( p.noise2D() * space.size.x/18 ), "circle" );
    });
  }, [noiseGrid]);

  const handleResize = useCallback((space) => {
    const gd = Create.gridPts( space.innerBound, 20, 20 );
    setNoiseGrid( Create.noisePts( gd, 0.05, 0.1, 20, 20 ) );
  }, [setNoiseGrid]);

  return (
    <PtsCanvas
      name={name}
      background={background}
      play={play}
      // onStart={handleStart}
      onResize={handleResize}
      onAnimate={handleAnimate}
    />
  );
}
