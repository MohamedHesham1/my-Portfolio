import info from '@/public/data/info.json';
import Image from 'next/image';
import AnimateRubber from './utils/AnimateRubber';

function ProjectSlide1({ direction, destination, slideIndexS }) {
  return (
    <div className=' w-screen overflow-hidden'>
      <div className='container flex h-screen items-center justify-between'>
        <div
          className={`text-wrapper flex-auto max-w-[550px] text-[18px] ${
            direction && window.location.hash === '#projects/2'
              ? 'animate-fadeOutLeftBig animate-duration-[1.8s]'
              : direction && slideIndexS === 3
              ? 'animate-slideInLeft animate-duration-[0.9s] animate-delay-[0.4s]'
              : direction && window.location.hash === '#projects'
              ? 'animate-fadeOutRightBig animate-duration-[2s] animate-delay-200'
              : direction && slideIndexS === 1
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
          <div className='py-6'>
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
                  alt=''
                  width={24}
                  height={24}
                  className='ms-[5px] rotate-[-90deg] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-90 '
                />
              </a>
            </div>
          </div>
        </div>
        <div className='image-wrapper mr-[70px] w-full relative'>
          <Image
            className={`absolute max-w-[200px] z-10 top-[-60px] left-[36%]  ${
              direction && window.location.hash === '#projects/2'
                ? 'animate-fadeOutLeftBig animate-duration-[1.4s] animate-delay-[0.3s]'
                : direction && slideIndexS === 3
                ? 'animate-slideInLeft animate-duration-[0.7s] animate-delay-[0.3s]'
                : ''
            }`}
            src='/images/dark_romb.png'
            alt=''
            width={494}
            height={441}
          />
          <div className='project-image'>
            <Image
              className={`max-w-[700px] w-full my-[20px] mx-auto ${
                direction && window.location.hash === '#projects'
                  ? 'animate-fadeOutRightBig animate-duration-[2s]'
                  : direction && slideIndexS === 1
                  ? 'animate-slideInRight animate-duration-[1s] animate-delay-[0.2s]'
                  : ''
              } `}
              src='/images/macbook.png'
              alt='e-commerce application'
              priority
              width={2100}
              height={1400}
            />
          </div>
          <Image
            className={`absolute max-w-[150px] z-10 bottom-[50px] right-[14%] `}
            src='/images/dark_cube1.png'
            alt=''
            width={424}
            height={351}
          />
          <Image
            className={`absolute max-w-[150px] z-[-1] bottom-[-100px] left-[150px] opacity-70 ${
              direction && window.location.hash === '#projects/2'
                ? 'animate-fadeOutLeftBig animate-duration-[1.4s] animate-delay-[0.3s]'
                : direction && slideIndexS === 3
                ? 'animate-slideInLeft animate-duration-[0.7s] animate-delay-[0.3s]'
                : ''
            }`}
            src='/images/white_cube2.png'
            alt=''
            width={356}
            height={289}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide1;
