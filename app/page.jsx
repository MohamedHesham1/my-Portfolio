'use client';
import React, { useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRef, useState } from 'react';
import Home from './_components/HomeSection';

const FullpageWrapper = () => {
  const [slideIndexS, setSlideIndexS] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);

  const fullpageApiRef = useRef(null);
  const handleSlideLoad = (origin, destination, direction) => {
    setSlideIndexS(destination.index + 1);
  };

  const handleLeave = (origin, destination, direction) => {
    const fullpageApi = fullpageApiRef.current;
    setDirection(direction);
    if (origin.index === 3 && !sliding) {
      if (direction === 'down' && slideIndexS < 3) {
        fullpageApi?.moveSlideRight();
        return false;
      } else if (direction === 'up' && slideIndexS > 1) {
        fullpageApi?.moveSlideLeft();
        return false;
      }
    } else if (sliding) {
      return false;
    }
    console.log(direction);
  };

  const fullpageOptions = {
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1200,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    afterSlideLoad: handleSlideLoad,
    onLeave: handleLeave,
    render: ({ fullpageApi }) => {
      // Store the fullpageApi reference in the ref
      fullpageApiRef.current = fullpageApi;

      return (
        <ReactFullpage.Wrapper>
          <div className='section'>
            <Home />
          </div>
          <div className='section parent-section'></div>
          <div className='section'></div>
          <div className='section'></div>
        </ReactFullpage.Wrapper>
      );
    },
  };

  return <ReactFullpage {...fullpageOptions} />;
};

export default FullpageWrapper;
