import Image from 'next/image';

function RectangleRotate() {
  return (
    <div className='rotate-180 absolute bottom-[-450px] left-[-550px] blur-[6px] opacity-70 -z-10'>
      <Image
        src='/images/rectangle-rotate.svg'
        alt=''
        width={903}
        height={887}
      />
    </div>
  );
}

export default RectangleRotate;
