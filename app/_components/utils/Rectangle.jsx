import Image from './Image';

// Blur is baked into the image; a CSS blur filter on this large element is
// expensive to repaint during section transitions.
function Rectangle() {
  return (
    <div className='absolute bottom-[-450px] right-[-550px] opacity-70 -z-10 lg:hidden'>
      <Image src='/images/rectangle-blur.webp' alt='' width={839} height={829} />
    </div>
  );
}

export default Rectangle;
