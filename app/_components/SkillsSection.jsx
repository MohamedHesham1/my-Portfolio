import info from '@/public/data/info.json';
import AnimateRubber from './utils/AnimateRubber';
import Image from 'next/image';
import Link from 'next/link';
import RectangleRotate from './utils/RectangleRotate';

function Skills({ direction, destination }) {
  return (
    <div className='container overflow-hidden'>
      <div className='skills-section md:px-8 sm:px-4'>
        <div
          className={`text-wrapper text-center text-[18px] leading-6 md:text-left ${
            direction === 'down' && destination.index === 2
              ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[0.2s]'
              : direction === 'down' && destination.index === 3
              ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.2s]'
              : direction === 'up' && destination.index === 1
              ? 'animate-fadeOut animate-duration-[1s]'
              : direction === 'up' && destination.index === 2
              ? 'animate-fadeIn animate-duration-1000  animate-delay-[0.2s]'
              : ''
          } `}
        >
          <h3 className='subtitle uppercase'>
            Where challenges arise, creativity thrives.
          </h3>
          <h2 className='heading max-w-full text-primary font-bold whitespace-pre  mt-[10px] mb-6'>
            {Array.from(info[2].heading).map((item, index) => {
              return <AnimateRubber key={index}>{item}</AnimateRubber>;
            })}
          </h2>
          <p className='mb-4'>
            My primary area of expertise centers around front-end development
          </p>
          <p className='mb-4 max-w-[700px] mx-auto '>
            I utilize HTML, CSS, and JavaScript to create engaging web
            interfaces, and I specialize in React and Redux Toolkit to build
            dynamic and rich web applications. I rely on frameworks such as Ant
            Design and Chakra UI to deliver visually appealing and user-friendly
            experiences. My experience extends to using Next.js for server-side
            rendering and Node and Express for backend development.
          </p>
          <p>
            Visit my
            <Link
              className='text-secondary px-2 hover:underline'
              href='https://www.linkedin.com/in/mohamed-hesham-hassan/'
              target='_blank'
            >
              Linkedin
            </Link>
            for more details.
          </p>
        </div>
        <ul className='logo-wrapper flex flex-wrap justify-center text-center max-w-[1000px] mx-auto mt-16 md:text-start md:justify-start'>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-100'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-100'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-100'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/js.svg'
              alt='JavaScript'
              width={128}
              height={128}
            />
            <p>JavaScript</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-100'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-100'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-100'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/react.svg'
              alt='React'
              width={128}
              height={128}
            />
            <p>React</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-200'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-200'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-200'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/vue.svg'
              alt='vue'
              width={128}
              height={128}
            />
            <p>Vue</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-300'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-300'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-300'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/next.svg'
              alt='next.js'
              width={128}
              height={128}
            />
            <p>Next</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-300'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-300'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-300'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/node.svg'
              alt='Node'
              width={128}
              height={128}
            />
            <p>Node</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[0.4s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.4s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[0.4s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/redux.svg'
              alt='redux'
              width={128}
              height={128}
            />
            <p>Redux</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-500'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-500'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-500'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/ant-design.svg'
              alt='ant design'
              width={128}
              height={128}
            />
            <p>Ant-Design</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[0.6s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.6s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[0.6s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/css.svg'
              alt='CSS3'
              width={128}
              height={128}
            />
            <p>CSS3</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-700'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-700'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-700'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/html.svg'
              alt='HTML5'
              width={128}
              height={128}
            />
            <p>HTML5</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[0.8s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.8s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[0.8s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/tailwind.svg'
              alt='tailwind'
              width={128}
              height={128}
            />
            <p>Tailwind</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[0.9s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[0.9s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[0.9s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/chakraui.svg'
              alt='Chakra UI'
              width={128}
              height={128}
            />
            <p>Chakra-UI</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-1000'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-1000'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-1000'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/git.svg'
              alt='Git'
              width={128}
              height={128}
            />
            <p>Git</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[1.1s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[1.1s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[1.1s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/sass.svg'
              alt='sass'
              width={128}
              height={128}
            />
            <p>Sass</p>
          </li>
          <li
            className={` ${
              direction === 'down' && destination.index === 2
                ? 'animate-fadeInUp animate-duration-[1s] animate-delay-[1.2s]'
                : direction === 'down' && destination.index === 3
                ? 'animate-fadeOutUpBig animate-duration-[3s] animate-delay-[1.2s]'
                : direction === 'up' && destination.index === 1
                ? 'animate-fadeOut animate-duration-[1s]  '
                : direction === 'up' && destination.index === 2
                ? 'animate-fadeIn animate-duration-1000  animate-delay-[1.2s]'
                : ''
            }  `}
          >
            <Image
              src='/images/brands/figma.svg'
              alt='Figma'
              width={128}
              height={128}
            />
            <p>Figma</p>
          </li>
        </ul>
      </div>

      <RectangleRotate />
    </div>
  );
}

export default Skills;
