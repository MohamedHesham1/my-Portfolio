import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const SpinningGlobe = () => {
  const globeEl = useRef();
  const [globeWidth, setGlobeWidth] = useState(850);
  const [globeHeight, setGlobeHeight] = useState(700);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.4;
      globeEl.current.controls().enableZoom = false;
    }
    if (window.innerWidth < 500) {
      setGlobeWidth(400);
      setGlobeHeight(400);
    }
  }, []);

  const places = [{ name: 'Cairo', latitude: 30.0444, longitude: 31.2357 }];

  return (
    <Globe
      ref={globeEl}
      globeImageUrl='/images/globe.jpg'
      pointsData={[
        { lat: 30.0444, lng: 31.2357, color: '#f4a949', altitude: 0.018 },
      ]}
      pointAltitude='altitude'
      pointColor='color'
      width={globeWidth}
      height={globeHeight}
      showAtmosphere={false}
      backgroundColor='#141416'
      labelsData={places}
      labelLat={(d) => d.latitude}
      labelLng={(d) => d.longitude}
      labelText={(d) => d.name}
      labelColor={() => '#f0f8ff'}
      pointRadius={0.8}
      labelSize={(d) => 3}
      labelDotRadius={(d) => 0}
      labelResolution={10}
      labelAltitude={0.01}
    />
  );
};

export default SpinningGlobe;
