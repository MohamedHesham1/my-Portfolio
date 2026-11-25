import info from '@/public/data/info.json';
import heroPhoto from '@/public/images/hero-photo.webp';
import Image from './utils/Image';
import { memo } from 'react';
import AnimateRubber from './utils/AnimateRubber';
import RectangleRotate from './utils/RectangleRotate';

function Home({ direction }) {
  return (
    <div className='container overflow-x-hidden'>
      <div className='flex h-screen items-center justify-between lg:relative md:flex-col-reverse sm:items-stretch sm:h-auto'>
        <div className='decorative-images'>
          <Image
            className='absolute top-[-320px] right-[1%] rotate-90 md:top-[-504px]'
            src='/images/side-dots.png'
            alt=''
            width={255}
            height={1678}
          />
          <Image
            className={`absolute opacity-70 max-w-[150px] top-[170px] left-[45%] md:hidden ${
              direction === 'down'
                ? 'animate-fadeOutUp'
                : direction === 'up'
                ? 'animate-fadeInDownBig animate-delay-[0.3s]'
                : ''
            }  `}
            src='/images/blue_romb2.webp'
            alt=''
            width={494}
            height={441}
            sizes='150px'
            quality={80}
          />
          <Image
            className={`absolute opacity-70 w-full max-w-[200px] bottom-[40px] left-[17%] md:hidden  ${
              direction === 'down'
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.4s]'
                : direction === 'up'
                ? 'animate-slideInDown animate-duration-[ 0.7s] animate-delay-[0.2s]'
                : ''
            }  `}
            src='/images/dark_cube2.webp'
            alt=''
            width={424}
            height={351}
            sizes='200px'
            quality={80}
          />
        </div>
        <div
          className={`flex-1 ${
            direction === 'down'
              ? 'animate-fadeOutUpBig animate-duration-[3s]'
              : direction === 'up'
              ? 'animate-slideInDown animate-duration-[0.7s] animate-delay-[0.2s]'
              : ''
          }  `}
        >
          <h1 className='heading max-w-full text-primary font-bold whitespace-pre'>
            {Array.from(info[0].heading[0]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
            <br />
            {Array.from(info[0].heading[1]).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
          </h1>
          <div className='text-left text-lg max-w-[510px]'>
            <p className='opacity-70 text-xl my-5 font-light tracking-[1px]'>
              Front End Developer / JavaScript Fan / CSS Expert
            </p>
            <p className='my-3'>
              I specialize in crafting web experiences that seamlessly blend
              beauty and functionality.
            </p>
            <p className='my-3'>
              A CSS maestro by day, I&apos;m constantly exploring the depths of
              JavaScript craft seamless interactions.
            </p>
            <p className='my-3'>
              Beyond code, I&apos;m a Cinephile 🎥, rock head 🎸, and art
              aficionado 🖼️– channeling the inspiration from these realms into
              my digital canvas.
            </p>
          </div>
        </div>
        <div
          className={`flex-1 md:m-[122px_auto_0px] ${
            direction === 'down'
              ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.2s]'
              : direction === 'up'
              ? 'animate-slideInDown animate-duration-[1s] animate-delay-[0.4s]'
              : ''
          }  `}
        >
          {/* Frame and glow are baked into the image (transparent webp), so no
              CSS filter is needed. `relative` keeps it painted above the
              absolutely positioned decorative dots. */}
          <Image
            className='relative max-w-[600px] w-full md:max-w-[400px]'
            src={heroPhoto}
            alt="Mohamed's photo"
            sizes='(max-width: 767px) 400px, 600px'
            priority
          />
        </div>
      </div>
      <RectangleRotate />
    </div>
  );
}

export default memo(Home);
