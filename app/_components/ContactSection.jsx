import Image from 'next/image';
import Link from 'next/link';
import Globe from './utils/GlobeWrapper';
import RectangleRotate from './utils/RectangleRotate';

function ContactSection({ direction, destination, slideIndexS }) {
  console.log(slideIndexS, destination?.anchor);

  return (
    <div className=' w-screen overflow-hidden'>
      <div className='container flex h-screen items-center relative'>
        <div className='image-wrapper caret-[transparent]'>
          <Globe />
        </div>
        <div className={'text-wrapper max-w-[350px] text-[18px]'}>
          <div
            className={` ${
              direction && slideIndexS === 2
                ? 'animate-slideInRight animate-duration-[0.8s] animate-delay-[0.8s]'
                : !direction
                ? 'animate-fadeOutRightBig animate-duration-[1.6s]'
                : ''
            } `}
          >
            <p className='leading-loose text-justify'>
              Have a project in mind? Or just want to connect? I am all ears!
              Reach out via email at
              <Link
                className='text-primary font-bold px-2 hover:text-secondary transition-colors duration-[1s] animate-ease-in-sine'
                href='mailto:mohamed.hesham.2049@gmail.com'
                target='_blank'
              >
                mohamed.hesham.2049@gmail.com
              </Link>
              or through
              <Link
                className='text-primary font-bold px-2 hover:text-secondary transition-colors duration-[1s] animate-ease-in-sine'
                href='https://www.linkedin.com/in/mohamed-hesham-hassan/'
                target='_blank'
              >
                Linkedin
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Image
        className={`absolute opacity-70 max-w-[150px] bottom-[180px] right-[250px] ${
          direction === 'down'
            ? 'animate-slideInUp animate-duration-[1s] animate-delay-[0.2s]'
            : direction === 'up'
            ? 'animate-fadeOutDownBig animate-duration-[ 3s] animate-delay-[0.2s]'
            : ''
        }  `}
        src='/images/white_cube1.png'
        alt=''
        width={424}
        height={351}
      />

      <div className='rectangle right-[-550px] top-[-400px]'>
        <Image src='/images/rectangle.svg' alt='' width={839} height={829} />
      </div>
      <RectangleRotate />
    </div>
  );
}

export default ContactSection;
