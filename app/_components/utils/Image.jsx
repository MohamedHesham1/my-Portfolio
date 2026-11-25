import NextImage from 'next/image';
import { memo } from 'react';

// next/image recomputes its attributes (srcset, sizes, URL parsing) on every
// render. Sections re-render on each scroll to swap animation classes, and
// those image recomputations were most of the work done right as a transition
// starts. Image props never change here, so skip re-rendering them.
export default memo(NextImage);
