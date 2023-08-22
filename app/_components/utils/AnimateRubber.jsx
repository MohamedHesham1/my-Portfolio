import { useState } from 'react';

function AnimateRubber({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover:text-secondary cursor-default inline-block text-5xl ${
        isHovered ? 'animate-rubberBand' : ''
      }`}
    >
      {children}
    </span>
  );
}

export default AnimateRubber;
