'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Overlay({ destination }) {
  const [linePosition, setLinePosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleLinkClick = (targetPosition) => {
    setLinePosition(targetPosition);
  };

  useEffect(() => {
    if (destination) {
      const newPosition = destination.index * 50;
      setLinePosition(newPosition);
    }
  }, [destination]);

  return (
    <div>
      <div
        className='logo z-20 fixed top-[40px] left-[50px] max-w-[140px] '
        onClick={() => handleLinkClick(0)}
      >
        <a href='#home'>
          <Image src='/images/logo2.png' alt='logo' width={1724} height={648} />
        </a>
      </div>
      <aside className=' text-primary z-20 fixed right-12 top-0 my-12'>
        <nav className='side-bar '>
          <a
            href='#contact'
            className='px-8 py-2 border-2 border-primary rounded-md text-[17px] font-semibold cursor-pointer transition-all duration-300 ease-in-out  hover:bg-primary hover:text-[#000]'
            onClick={() => handleLinkClick(200)}
          >
            Contact
          </a>
          <ul className='side-nav relative flex flex-col list-none  text-[13px]'>
            <li>
              <a
                href='#home'
                className='nav-link'
                onClick={() => handleLinkClick(0)}
              >
                00
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='nav-link'
                onClick={() => handleLinkClick(50)}
              >
                01
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='nav-link'
                onClick={() => handleLinkClick(100)}
              >
                02
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='nav-link'
                onClick={() => handleLinkClick(150)}
              >
                03
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='nav-link'
                onClick={() => handleLinkClick(200)}
              >
                04
              </a>
            </li>
            <div
              className={`line ${
                hoveredIndex !== null ? `hover-${hoveredIndex}` : ''
              }`}
              style={{ transform: `translateY(${linePosition}px)` }}
            />
          </ul>
          <div className='up'>
            <a href='#home'>
              <Image
                src='/images/chevrons-up.svg'
                width={50}
                height={50}
                alt='up'
                onClick={() => handleLinkClick(0)}
              />
            </a>
          </div>
        </nav>
      </aside>
      <Link
        href='https://github.com/MohamedHesham1'
        target='_blank'
        className='z-20 fixed bottom-[40px] left-[50px] '
      >
        <Image
          src='/images/github.svg'
          className='w-auto h-auto'
          alt='github'
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}

export default Overlay;
