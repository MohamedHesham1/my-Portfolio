import Image from 'next/image';

function Rectangle() {
  return (
    <div className='absolute bottom-[-450px] right-[-550px] blur-[6px] opacity-70 -z-10 lg:hidden'>
      <Image src='/images/rectangle.svg' alt='' width={839} height={829} />
    </div>
  );
}

export default Rectangle;
