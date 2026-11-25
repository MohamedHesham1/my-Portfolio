import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const places = [{ name: 'Cairo', latitude: 30.0444, longitude: 31.2357 }];
const points = [
  { lat: 30.0444, lng: 31.2357, color: '#f4a949', altitude: 0.018 },
];

// Stable accessors: new function props on re-render make react-globe.gl
// rebuild the label geometry.
const labelLat = (d) => d.latitude;
const labelLng = (d) => d.longitude;
const labelText = (d) => d.name;
// A string here is read as a property name, not a color, so keep a function.
const labelColor = () => '#f0f8ff';

const SpinningGlobe = () => {
  const globeEl = useRef();
  const wrapperRef = useRef();
  const [size, setSize] = useState({ width: 850, height: 700 });
  const visibleRef = useRef(false);
  const warmRef = useRef(false);
  const warmTimerRef = useRef();

  // Let the globe render briefly after load so shaders and the texture are
  // uploaded to the GPU up front. Otherwise that work lands mid-transition the
  // first time the contact section scrolls in.
  const handleReady = useCallback(() => {
    warmTimerRef.current = setTimeout(() => {
      warmRef.current = true;
      if (!visibleRef.current) globeEl.current?.pauseAnimation();
    }, 500);
  }, []);

  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.4;
    controls.enableZoom = false;

    // Rendering at full device pixel ratio is costly on high-DPI screens.
    globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    if (window.innerWidth < 500) setSize({ width: 400, height: 400 });

    // The WebGL render loop runs every frame. Only run it while the globe is
    // on screen so it doesn't compete with section transitions elsewhere.
    // Pausing waits until the globe is warmed up (see handleReady).
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (!warmRef.current) return;
        if (entry.isIntersecting) globe.resumeAnimation();
        else globe.pauseAnimation();
      },
      { rootMargin: '100px' }
    );
    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(warmTimerRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <Globe
        ref={globeEl}
        onGlobeReady={handleReady}
        globeImageUrl='/images/globe.jpg'
        pointsData={points}
        pointAltitude='altitude'
        pointColor='color'
        width={size.width}
        height={size.height}
        showAtmosphere={false}
        backgroundColor='#141416'
        labelsData={places}
        labelLat={labelLat}
        labelLng={labelLng}
        labelText={labelText}
        labelColor={labelColor}
        pointRadius={0.8}
        labelSize={3}
        labelDotRadius={0}
        labelResolution={10}
        labelAltitude={0.01}
      />
    </div>
  );
};

export default memo(SpinningGlobe);
