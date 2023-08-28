import Image from 'next/image';

function Rectangle() {
  return (
    <div className='rectangle right-[-550px]'>
      <Image src='/images/rectangle.svg' alt='' width={839} height={829} />
    </div>
  );
}

export default Rectangle;
