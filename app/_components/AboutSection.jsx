import info from '@/public/data/info.json';
import Image from 'next/image';
import AnimateRubber from './utils/AnimateRubber';
import Rectangle from './utils/Rectangle';
function About({ direction, destination }) {
  return (
    <div className='container overflow-x-hidden'>
      <div className='flex h-screen items-center flex-wrap justify-between overflow-hidden md:flex-col-reverse'>
        <div
          className={`text-wrapper flex-1 ${
            direction === 'down' && destination.index === 1
              ? 'animate-slideInUp animate-duration-[1.2s] animate-delay-[0.4s]'
              : direction === 'down' && destination.index === 2
              ? 'animate-fadeOutUpBig animate-duration-[3.6s]  '
              : direction === 'up' && destination.index === 0
              ? 'animate-fadeOutDownBig animate-duration-[3.6s]  '
              : direction === 'up' && destination.index === 1
              ? 'animate-slideInDown animate-duration-[1.2s]  animate-delay-[0.4s]'
              : ''
          }  `}
        >
          <h2 className='heading max-w-full text-primary font-bold whitespace-pre'>
            {Array.from(info[1].heading[0]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
            <br />
            <span className='relative'>
              {Array.from(info[1].heading[1]).map((item, index) => {
                return <AnimateRubber key={index}>{item}</AnimateRubber>;
              })}
              <Image
                src='/images/darth-vader.svg'
                className='w-10  right-[-46px] absolute top-[26px]'
                alt=''
                width={64}
                height={64}
              />
            </span>
          </h2>
          <div className='text-justify max-w-[530px] text-lg'>
            <p className='py-8 pe-28'>
              🚀I engineer solutions for design challenges, create intuitive
              interfaces, and craft dynamic web apps. Transforming concepts into
              captivating online experiences. Join me as I navigate the digital
              realm, crafting immersive web landscapes.
            </p>
          </div>
          <div className='text-[#9c27b0] text-lg font-semibold'>
            <a href='#skills' className='inline-flex items-center group  '>
              My skills
              <Image
                src='/images/arrow-pink.svg'
                alt=''
                width={24}
                height={24}
                className='ms-[5px] rotate-[-90deg] transition-transform duration-300 ease-out group-hover:rotate-0'
              />
            </a>
          </div>
        </div>
        <div
          className={`image-wrapper flex-1 pe-[100px] mt-8 mx-auto md:max-w-[500px] ${
            direction === 'down' && destination.index === 1
              ? 'animate-slideInUp animate-duration-[1s] animate-delay-[0.5s]'
              : direction === 'down' && destination.index === 2
              ? 'animate-fadeOutUpBig animate-duration-[3s] '
              : direction === 'up' && destination.index === 0
              ? 'animate-fadeOutDownBig animate-duration-[3s]  '
              : direction === 'up' && destination.index === 1
              ? 'animate-slideInDown animate-duration-1000  animate-delay-[0.5s]'
              : ''
          }  `}
        >
          <Image
            src='/images/pc.svg'
            priority
            alt=''
            width={3879}
            height={4661}
          />
        </div>
      </div>
      <Image
        className={`absolute opacity-70 max-w-[200px] bottom-[20px] left-[730px] lg:hidden ${
          direction === 'down' && destination.index === 1
            ? 'animate-slideInUp animate-duration-[0.8s] animate-delay-[0.4s]'
            : direction === 'down' && destination.index === 2
            ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.4s]'
            : direction === 'up' && destination.index === 0
            ? 'animate-fadeOutDownBig animate-duration-[2.4s]'
            : direction === 'up' && destination.index === 1
            ? 'animate-slideInDown animate-duration-[ 0.7s] animate-delay-[0.2s]'
            : ''
        }  `}
        src='/images/purple_romb1.png'
        alt=''
        width={518}
        height={577}
      />
      <Rectangle />
    </div>
  );
}

export default About;
