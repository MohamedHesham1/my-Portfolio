import info from '@/public/data/info.json';
import Image from 'next/image';
import AnimateRubber from './utils/AnimateRubber';

function ProjectSlide0({ direction, destination, slideIndex, setNavigate }) {
  return (
    <div className='container flex h-screen items-center'>
      <div
        className={`mx-auto text-center md:text-left
      ${
        direction && destination.index === 3
          ? 'animate-slideInUp animate-duration-[1s] animate-delay-[0.2s]'
          : direction === 'up'
          ? 'animate-fadeOutDown animate-duration-[2s]'
          : ''
      }
      `}
      >
        <div
          className={`text-wrapper ${
            direction && window.location.hash === '#projects/1'
              ? 'animate-fadeOutLeftBig animate-duration-[1.8s]'
              : direction && slideIndex === 2
              ? 'animate-slideInLeft animate-duration-[0.9s] animate-delay-[0.4s]'
              : ''
          } `}
        >
          <h2 className='heading max-w-full text-primary font-bold whitespace-pre leading-[54px]  mt-[10px] '>
            {Array.from(info[3].heading[0]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
            <br />
            {Array.from(info[3].heading[1]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
          </h2>
          <p className='py-[1.5rem] text-[18px] max-w-[580px]'>
            I&apos;ve built a diverse range of projects that have allowed me to
            explore new ideas and push my limits as a front-end developer. If
            you are interested in seeing more examples of my work, feel free to
            {'  '}
            <a
              href='#contact'
              className='hover:opacity-90 text-secondary font-semibold'
              onClick={() => setNavigate(true)}
            >
              contact me!
            </a>
          </p>
          <div className='text-[#9c27b0] text-[18px]  font-semibold'>
            <a
              href='#projects/1'
              className='inline-flex justify-center items-center group'
            >
              <p> My skills</p>
              <Image
                src='/images/arrow-pink.svg'
                alt=''
                width={24}
                height={24}
                className='ms-[5px] rotate-[-90deg] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-90'
              />
            </a>
          </div>
        </div>
      </div>

      <Image
        className={`absolute top-[230px] left-[10%] -z-10 ${
          direction && destination.index === 3
            ? 'animate-slideInUp animate-duration-[0.7s] animate-delay-[0.3s]'
            : direction === 'up' && destination.index === 2
            ? 'animate-slideOutUp animate-duration-[1.4s]'
            : ''
        }`}
        src='/images/sphere_sm.png'
        alt=''
        width={59}
        height={59}
        unoptimized
      />
      <Image
        className={`absolute bottom-[140px] ${
          direction === 'up' && destination.index === 2
            ? 'animate-fadeOutDown animate-duration-[2s]'
            : ''
        } `}
        src='/images/sphere_md.png'
        alt=''
        width={105}
        height={105}
        unoptimized
      />
      <Image
        className={`absolute top-[330px] right-[73%] z-[-1] ${
          direction && window.location.hash === '#projects/1'
            ? 'animate-fadeOutLeftBig animate-duration-[1.4s] animate-delay-[0.3s]'
            : direction && slideIndex === 2
            ? 'animate-slideInLeft animate-duration-[0.7s] animate-delay-[0.2s]'
            : ''
        }`}
        src='/images/sphere_lg.png'
        alt=''
        width={160}
        height={160}
        unoptimized
      />
    </div>
  );
}

export default ProjectSlide0;
