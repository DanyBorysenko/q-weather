"use client"

import React, { useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  
  React.useEffect(() => {

    let i =setInterval(() => {   
      const d = new Date();
      const minTime = d.getHours() * 60 + d.getMinutes();
      const minPerDay = 1440;
      setProgress((minTime/minPerDay)*100);
    }, 1000)
    return (() => clearInterval(i));
  }, []);

  
  return (
        <Progress.Root
      className=" relative mt-12 overflow-hidden bg-blackA9 rounded-full w-full h-[25px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>    
  );
};

export default ProgressDemo;
