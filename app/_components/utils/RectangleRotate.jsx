import Image from './Image';

// Blur is baked into the image; a CSS blur filter on this large element is
// expensive to repaint during section transitions.
function RectangleRotate() {
  return (
    <div className='rotate-180 absolute bottom-[-450px] left-[-550px] opacity-70 -z-10'>
      <Image
        src='/images/rectangle-rotate-blur.webp'
        alt=''
        width={903}
        height={887}
      />
    </div>
  );
}

export default RectangleRotate;
