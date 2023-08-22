import info from '@/public/data/info.json';
import Image from 'next/image';
import AnimateRubber from './utils/AnimateRubber';

function Home({ direction }) {
  return (
    <div className='container overflow-x-hidden'>
      <div className='flex h-screen items-center flex-wrap justify-between'>
        <div>
          <Image
            className='top-[-380px] right-[1%] absolute rotate-90'
            src='/images/side-dots.png'
            alt=''
            width={255}
            height={1678}
          />
          <Image
            className={`absolute opacity-70 max-w-[150px] top-[170px] left-[45%]  ${
              direction === 'down'
                ? 'animate-fadeOutUp'
                : direction === 'up'
                ? 'animate-fadeInDownBig  animate-delay-[0.3s]'
                : ''
            }  `}
            src='/images/blue_romb2.png'
            alt=''
            width={494}
            height={441}
          />
          <Image
            className={`absolute opacity-70 max-w-[200px] bottom-[40px] left-[17%] ${
              direction === 'down'
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.4s]'
                : direction === 'up'
                ? 'animate-slideInDown animate-duration-[ 0.7s] animate-delay-[0.2s]'
                : ''
            }  `}
            src='/images/dark_cube2.png'
            alt=''
            width={424}
            height={351}
          />
        </div>
        <div
          className={`flex-1 ${
            direction === 'down'
              ? 'animate-fadeOutUpBig animate-duration-[3s]   '
              : direction === 'up'
              ? 'animate-slideInDown animate-duration-[ 0.7s] animate-delay-[0.2s] '
              : ''
          }  `}
        >
          <h1 className='heading max-w-full text-primary text-5xl font-bold whitespace-pre'>
            <div>
              {Array.from(info[0].heading[0]).map((item, index) => {
                return <AnimateRubber key={index}>{item}</AnimateRubber>;
              })}
            </div>
            <div>
              {Array.from(info[0].heading[1]).map((item, index) => {
                return <AnimateRubber key={index}>{item}</AnimateRubber>;
              })}
            </div>
          </h1>
          <div className='text-justify max-w-[530px]'>
            <p className='opacity-70 text-xl my-5 font-light tracking-[1px]'>
              Front End Developer / JavaScript Fan / CSS Expert
            </p>
            <p className='my-3'>
              I&apos;m all about crafting web experiences that blend beauty with
              functionality.
            </p>
            <p className='my-3'>
              CSS maestro by day, I&apos;m constantly exploring the depths of
              JavaScript to make every interaction seamless.
            </p>
            <p className='my-3'>
              Beyond code, I&apos;m a cinephile, rock head, and art aficionado –
              the inspiration behind my digital canvas.
            </p>
          </div>
        </div>
        <div
          className={`flex-1  ${
            direction === 'down'
              ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.2s]'
              : direction === 'up'
              ? 'animate-slideInDown animate-duration-[1s] animate-delay-[0.4s]'
              : ''
          }  `}
        >
          <Image
            className='max-w-[600px] drop-shadow-[-12px_5px_50px_rgba(28,95,154,0.4)]'
            priority
            src='/images/my-photo.png'
            alt="Mohamed's photo"
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <div className='rectangle rotate left-[-550px]'>
        <Image
          src='/images/rectangle-rotate.svg'
          alt=''
          width={903}
          height={887}
        />
      </div>
    </div>
  );
}

export default Home;
