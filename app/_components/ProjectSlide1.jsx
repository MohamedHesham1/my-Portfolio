import info from '@/public/data/info.json';
import macBook from '@/public/images/macbook.webp';
import Image from './utils/Image';
import { memo } from 'react';
import AnimateRubber from './utils/AnimateRubber';

// `slide` is the last horizontal move ({ from, to } slide indexes).
// Images here use loading='eager'. This slide sits off-screen to the side,
// where the browser's lazy loading doesn't look ahead, so lazy images only
// started loading once the slide moved in and popped in late.
function ProjectSlide1({ slide }) {
  return (
    <div className='overflow-hidden'>
      <div className='container flex h-screen items-center justify-between md:flex-col md:justify-center'>
        <div
          className={`text-wrapper max-w-[550px] text-[18px] md:order-1 ${
            slide?.to === 2
              ? 'animate-fadeOutLeftBig animate-duration-[1.8s]'
              : slide?.from === 2
              ? 'animate-slideInLeft animate-duration-[0.9s] animate-delay-[0.4s]'
              : slide?.to === 0
              ? 'animate-fadeOutRightBig animate-duration-[2s] animate-delay-200'
              : slide?.from === 0
              ? 'animate-slideInRight animate-duration-[1s] animate-delay-[0.2s]'
              : ''
          } `}
        >
          <h3 className='subtitle uppercase'>E-COMMERCE APPLICATION</h3>
          <h2 className='heading max-w-full text-primary font-bold whitespace-pre  mt-[10px] tracking-[2px]'>
            {Array.from(info[3].projectHeading[0]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
          </h2>
          <div className='py-6 md:p-0'>
            <p className='my-[18px]'>
              Online store for selling electronic products
            </p>
            <p className='mb-[18px]'>
              <strong>Technologies Used: </strong>React, Redux Toolkit, Node,
              Express, MongoDB, Mongoose ODM, paypal payment integration.
            </p>
          </div>
          <div>
            <div className='text-primary text-[18px] font-semibold mb-[10px]'>
              <a
                href='https://github.com/MohamedHesham1/Emart'
                target='_blank'
                className='inline-flex justify-center items-center group'
              >
                <p>View the code</p>
                <Image
                  src='/images/arrow-white.svg'
                  loading='eager'
                  alt=''
                  width={24}
                  height={24}
                  className='ml-[5px] rotate-[-90deg] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-90 '
                />
              </a>
            </div>
            <div className='text-secondary text-[18px] font-semibold'>
              <a
                href='https://emart-gkyr.onrender.com/'
                target='_blank'
                className='inline-flex justify-center items-center group '
              >
                <p>Visit the app</p>
                <Image
                  src='/images/arrow-orange.svg'
                  loading='eager'
                  alt=''
                  width={24}
                  height={24}
                  className='ms-[5px] rotate-[-90deg] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-90 '
                />
              </a>
            </div>
          </div>
        </div>
        <div className='image-wrapper mr-[70px] w-full relative md:m-0'>
          <Image
            className={`absolute max-w-[200px] z-10 top-[-60px] left-[36%] md:hidden ${
              slide?.to === 2
                ? 'animate-fadeOutLeftBig animate-duration-[1.4s] animate-delay-[0.3s]'
                : slide?.from === 2
                ? 'animate-slideInLeft animate-duration-[0.7s] animate-delay-[0.3s]'
                : ''
            }`}
            src='/images/dark_romb.webp'
            loading='eager'
            alt=''
            width={494}
            height={441}
            sizes='200px'
          />
          <div className='project-image'>
            <Image
              className={`max-w-[700px] w-full my-[20px] mx-auto md:max-w-[500px] ${
                slide?.to === 0
                  ? 'animate-fadeOutRightBig animate-duration-[2s]'
                  : slide?.from === 0
                  ? 'animate-slideInRight animate-duration-[1s] animate-delay-[0.2s]'
                  : ''
              } `}
              src={macBook}
              loading='eager'
              alt='e-commerce application'
              sizes='(max-width: 767px) 500px, 700px'
            />
          </div>
          <Image
            className='absolute max-w-[150px] z-10 bottom-[50px] right-[14%] md:hidden'
            src='/images/dark_cube1.webp'
            loading='eager'
            alt=''
            width={424}
            height={351}
            sizes='150px'
          />
          <Image
            className={`absolute max-w-[150px] z-[-1] bottom-[-100px] left-[150px] opacity-70 md:hidden ${
              slide?.to === 2
                ? 'animate-fadeOutLeftBig animate-duration-[1.4s] animate-delay-[0.3s]'
                : slide?.from === 2
                ? 'animate-slideInLeft animate-duration-[0.7s] animate-delay-[0.3s]'
                : ''
            }`}
            src='/images/white_cube2.webp'
            loading='eager'
            alt=''
            width={356}
            height={289}
            sizes='150px'
          />
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectSlide1);
