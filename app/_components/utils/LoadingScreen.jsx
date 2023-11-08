import Image from 'next/image';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#141416] cursor-none'>
      <Image
        className='max-w-[70px] md:max-w-[60px]'
        src='/images/loading-img.svg'
        alt=''
        width={200}
        height={200}
      />
      <p className='text-primary text-lg font-bold text-start mr-3 font-mono'>
        L0AD1NG
      </p>
    </div>
  );
};

export default LoadingScreen;
