import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const SpinningGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.8;
    globeEl.current.controls().enableZoom = false;
  }, []);

  const places = [{ name: 'Cairo', latitude: 30.0444, longitude: 31.2357 }];

  return (
    <Globe
      ref={globeEl}
      globeImageUrl='/images/globe.jpg'
      pointsData={[
        { lat: 30.0444, lng: 31.2357, color: '#9c27b0', altitude: 0 },
      ]}
      pointAltitude='altitude'
      pointColor='color'
      backgroundColor='rgba(0,0,0,0)'
      width={850}
      height={700}
      showAtmosphere={false}
      pointRadius={1}
      labelsData={places}
      labelLat={(d) => d.latitude}
      labelLng={(d) => d.longitude}
      labelText={(d) => d.name}
      labelSize={(d) => 3}
      labelDotRadius={(d) => 1.5}
      labelColor={() => '#c98202'}
      labelResolution={5}
    />
  );
};

export default SpinningGlobe;
