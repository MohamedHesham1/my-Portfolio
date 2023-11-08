'use client';
import ReactFullpage from '@fullpage/react-fullpage';
import { useEffect, useRef, useState } from 'react';
import About from './_components/AboutSection';
import ContactSection from './_components/ContactSection';
import Home from './_components/HomeSection';
import Overlay from './_components/Overlay';
import ProjectSlide1 from './_components/ProjectSlide1';
import ProjectSlide2 from './_components/ProjectSlide2';
import ProjectSlide0 from './_components/ProjectSlide0';
import Skills from './_components/SkillsSection';
import LoadingScreen from './_components/utils/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [slideIndexS, setSlideIndexS] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [destination, setDestination] = useState(null);
  const [navigate, setNavigate] = useState(false);
  const fullpageApiRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
    <>
      <Overlay destination={destination} setNavigate={setNavigate} />
      <ReactFullpage
        anchors={['home', 'about', 'skills', 'projects', 'contact']}
        menu='#menu'
        responsiveWidth={1000}
        css3={true}
        scrollingSpeed={1200}
        slidesNavigation={true}
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        afterSlideLoad={handleSlideLoad}
        onLeave={handleLeave}
        onSlideLeave={() => {}}
        render={({ fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;

          return (
            <ReactFullpage.Wrapper>
              <section className='section fp-auto-height-responsive'>
                <Home direction={direction} />
              </section>
              <section className='section fp-auto-height-responsive'>
                <About direction={direction} destination={destination} />
              </section>
              <section className='section fp-auto-height-responsive'>
                <Skills direction={direction} destination={destination} />
              </section>
              <section className='section fp-auto-height-responsive'>
                <div className='slide fp-auto-height-responsive'>
                  <ProjectSlide0
                    direction={direction}
                    destination={destination}
                    slideIndexS={slideIndexS}
                  />
                </div>
                <div className='slide fp-auto-height-responsive'>
                  <ProjectSlide1
                    direction={direction}
                    destination={destination}
                    slideIndexS={slideIndexS}
                  />
                </div>
                <div className='slide fp-auto-height-responsive'>
                  <ProjectSlide2
                    direction={direction}
                    destination={destination}
                    slideIndexS={slideIndexS}
                  />
                </div>
              </section>
              <section className='section fp-auto-height-responsive'>
                <ContactSection direction={direction} />
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
        </>
      )}
    </>
  );
};

export default App;
