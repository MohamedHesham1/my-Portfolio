import { memo, useState } from 'react';

function AnimateRubber({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hover:text-secondary cursor-default inline-block  ${
        isHovered ? 'animate-rubberBand' : ''
      }`}
    >
      {children}
    </span>
  );
}

// Each heading letter is one of these; memo skips them on every section change.
export default memo(AnimateRubber);
