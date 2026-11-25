import info from '@/public/data/info.json';
import Image from './utils/Image';
import Link from 'next/link';
import { memo } from 'react';
import AnimateRubber from './utils/AnimateRubber';
import RectangleRotate from './utils/RectangleRotate';

// [icon file, label, stagger delay in ms]
const skills = [
  ['js', 'JavaScript', 100],
  ['react', 'React', 100],
  ['vue', 'Vue', 200],
  ['next', 'Next', 300],
  ['node', 'Node', 300],
  ['redux', 'Redux', 400],
  ['ant-design', 'Ant-Design', 500],
  ['css', 'CSS3', 600],
  ['html', 'HTML5', 700],
  ['tailwind', 'Tailwind', 800],
  ['chakraui', 'Chakra-UI', 900],
  ['git', 'Git', 1000],
  ['sass', 'Sass', 1100],
  ['figma', 'Figma', 1200],
];

// Logo animation per transition. The second value says whether the logos
// use their stagger delay.
function getLogoAnimation(direction, index) {
  if (direction === 'down' && index === 2)
    return ['animate-fadeInUp animate-duration-[1s]', true];
  if (direction === 'down' && index === 3)
    return ['animate-fadeOutUpBig animate-duration-[3s]', true];
  if (direction === 'up' && index === 1)
    return ['animate-fadeOut animate-duration-[1s]', false];
  if (direction === 'up' && index === 2)
    return ['animate-fadeIn animate-duration-1000', true];
  return ['', false];
}

function Skills({ direction, destination }) {
  const [logoAnimation, logoStagger] = getLogoAnimation(
    direction,
    destination?.index
  );
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
          {skills.map(([icon, name, delay]) => (
            <li
              key={name}
              className={logoAnimation}
              style={logoStagger ? { animationDelay: `${delay}ms` } : undefined}
            >
              <Image
                src={`/images/brands/${icon}.svg`}
                alt=''
                width={128}
                height={128}
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <RectangleRotate />
    </div>
  );
}

export default memo(Skills);
