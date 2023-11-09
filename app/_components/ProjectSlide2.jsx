import info from '@/public/data/info.json';
import iphone from '@/public/images/iphone14.png';
import Image from 'next/image';
import AnimateRubber from './utils/AnimateRubber';

function ProjectSlide2({ direction, destination, slideIndexS }) {
  return (
    <div className='overflow-hidden'>
      <div className='container flex h-screen items-center justify-between relative lg:flex-col lg:justify-center sm:gap-6'>
        <Image
          className={`absolute z-[-1] top-[-398px] left-[18%] xl:hidden`}
          src='/images/side-dots.png'
          alt=''
          width={255}
          height={1678}
        />
        <div
          className={`image-wrapper ${
            direction && destination.index === 4
              ? 'animate-fadeOutUpBig animate-duration-[3.6s] animate-delay-[0.2s]'
              : direction && destination.index === 3
              ? 'animate-slideInDown animate-duration-[1.2s] animate-delay-[0.2s]'
              : ''
          }  `}
        >
          <div
            className={` ${
              direction && slideIndexS === 2
                ? 'animate-slideInRight animate-duration-[0.6s] '
                : direction && window.location.hash === '#projects/1'
                ? 'animate-fadeOutRightBig animate-duration-[1.2s] animate-delay-[0.3s]'
                : ''
            } `}
          >
            <Image
              className={` max-w-[700px] max-h-[420px] xl:w-full`}
              src={iphone}
              alt='e-learning application'
            />
          </div>
        </div>
        <div
          className={`text-wrapper max-w-[550px] text-[18px] pl-12 mr-[11%]  ${
            direction && destination.index === 4
              ? 'animate-fadeOutUpBig animate-duration-[3s]'
              : direction && destination.index === 3
              ? 'animate-slideInDown animate-duration-[1s] animate-delay-[0.2s]'
              : ''
          } `}
        >
          <div
            className={` ${
              direction && slideIndexS === 2
                ? 'animate-slideInRight animate-duration-[0.8s] animate-delay-[0.8s]'
                : direction && window.location.hash === '#projects/1'
                ? 'animate-fadeOutRightBig animate-duration-[1.6s]'
                : ''
            } `}
          >
            <h3 className='subtitle uppercase'>E-LEARNING APPLICATION</h3>
            <h2 className='heading max-w-full text-primary font-bold whitespace-pre  mt-[10px]'>
              {Array.from(info[3].projectHeading[1]).map((item, index) => {
                return <AnimateRubber key={index}>{item}</AnimateRubber>;
              })}
            </h2>
            <div className='py-6 sm:py-0'>
              <p className='my-[18px]'>
                Online platform tailored for teachers and students
              </p>
              <p className='mb-[18px]'>
                <strong>Technologies Used: </strong>React, Redux Toolkit, Next,
                Ant-Design, Framer-motion.
              </p>
            </div>
            <div>
              <div className='text-primary text-[18px] font-semibold mb-[10px]'>
                <a
                  href='https://github.com/MohamedHesham1/e-learning-landing'
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
                  href='https://hassan-maher-platform.vercel.app/'
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
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide2;
