import Image from 'next/image';

function RectangleRotate() {
  return (
    <div className='rectangle rotate left-[-550px]'>
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
