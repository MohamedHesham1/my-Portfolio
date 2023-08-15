'use client';
import React, { useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import Home from './_components/HomeSection';

const FullpageWrapper = () => {
  const [slideIndexS, setSlideIndexS] = useState(0);
  const [sliding, setSliding] = useState(false);
  const fullpageApiRef = useRef(null);

  const handleSlideLoad = (section, origin, destination, direction) => {
    setSlideIndexS(destination.index + 1);
  };

  const handleLeave = (origin, destination, direction) => {
    const fullpageApi = fullpageApiRef.current;

    if (origin.index === 1 && !sliding) {
      if (direction === 'down' && slideIndexS < 4) {
        fullpageApi.moveSlideRight();
        return false;
      } else if (direction === 'up' && slideIndexS > 1) {
        fullpageApi.moveSlideLeft();
        return false;
      }
    } else if (sliding) {
      return false;
    }
    console.log(direction);
  };

  const fullpageOptions = {
    anchors: ['home', 'about', 'skills', 'portfolio', 'contact'],
    menu: '#menu',
    css3: true,

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
