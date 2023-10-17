'use client';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRef, useState } from 'react';
import About from './_components/AboutSection';
import ContactSection from './_components/ContactSection';
import Home from './_components/HomeSection';
import Overlay from './_components/Overlay';
import ProjectSlide1 from './_components/ProjectSlide1';
import ProjectSlide2 from './_components/ProjectSlide2';
import ProjectSlideIntro from './_components/ProjectSlideIntro';
import Skills from './_components/SkillsSection';

const FullpageWrapper = () => {
  const [slideIndexS, setSlideIndexS] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [destination, setDestination] = useState(null);
  const [navigate, setNavigate] = useState(false);

  const fullpageApiRef = useRef(null);

  const handleSlideLoad = (section, origin, destination, direction) => {
    setSlideIndexS(destination.index + 1);
  };
  const handleLeave = (origin, destination, direction) => {
    const fullpageApi = fullpageApiRef.current;
    setNavigate(false);
    if (origin.index === 3 && !sliding) {
      if (direction === 'down' && slideIndexS < 3 && !navigate) {
        fullpageApi?.moveSlideRight();
        return false;
      } else if (direction === 'up' && slideIndexS > 1 && !navigate) {
        fullpageApi?.moveSlideLeft();
        return false;
      }
    } else if (sliding) {
      return false;
    }
    setDirection(direction);
    setDestination(destination);
  };

  const fullpageOptions = {
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1200,
    slidesNavigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    afterSlideLoad: handleSlideLoad,
    onLeave: handleLeave,
    render: ({ fullpageApi }) => {
      // Store the fullpageApi reference in the ref
      fullpageApiRef.current = fullpageApi;

      return (
        <ReactFullpage.Wrapper>
          <section className='section'>
            <Home direction={direction} />
          </section>
          <section className='section'>
            <About direction={direction} destination={destination} />
          </section>
          <section className='section'>
            <Skills direction={direction} destination={destination} />
          </section>
          <section className='section'>
            <div className='slide'>
              <ProjectSlideIntro
                direction={direction}
                destination={destination}
                slideIndexS={slideIndexS}
              />
            </div>
            <div className='slide'>
              <ProjectSlide1
                direction={direction}
                destination={destination}
                slideIndexS={slideIndexS}
              />
            </div>
            <div className='slide'>
              <ProjectSlide2
                direction={direction}
                destination={destination}
                slideIndexS={slideIndexS}
              />
            </div>
          </section>
          <section className='section'>
            <ContactSection direction={direction} destination={destination} />
          </section>
        </ReactFullpage.Wrapper>
      );
    },
  };

  return (
    <>
      <Overlay destination={destination} setNavigate={setNavigate} />
      <ReactFullpage {...fullpageOptions} />
    </>
  );
};

export default FullpageWrapper;
