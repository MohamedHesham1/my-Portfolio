'use client';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Overlay({ destination, setNavigate }) {
  const [linePosition, setLinePosition] = useState(0);

  const handleLinkClick = (targetPosition) => {
    setLinePosition(targetPosition);
    setNavigate(true);
  };

  useEffect(() => {
    if (destination) {
      const newPosition = destination.index * 50;
      setLinePosition(newPosition);
    }
  }, [destination]);

  return (
    <>
      <header
        className='z-20 fixed top-[40px] left-[50px] max-w-[160px] lg:top-[20px] lg:left-[30px] sm:max-w-[130px]'
        onClick={() => handleLinkClick(0)}
      >
        <a href='#home'>
          <Image src={logo} alt='logo' />
        </a>
      </header>
      <aside className='text-primary z-20 fixed right-12 top-0 my-12 lg:top-[-18px] sm:top-[-20px] sm:right-6'>
        <nav className='side-bar'>
          <a
            href='#contact'
            className='px-8 py-2 border-2 border-primary rounded-md text-[17px] font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary hover:text-[#000] sm:px-6'
            onClick={() => handleLinkClick(200)}
          >
            Contact
          </a>
          <ul className='side-nav relative flex flex-col list-none text-[13px] lg:hidden'>
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
            <li
              className='line'
              style={{ transform: `translateY(${linePosition}px)` }}
            />
          </ul>
          <div className='arrow-up md:hidden'>
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
        className='z-20 fixed bottom-[40px] left-[50px] md:hidden'
        href='https://github.com/MohamedHesham1'
        target='_blank'
      >
        <Image
          className='max-w-[30px] h-[38px]'
          src='/images/github.svg'
          alt='github'
          width={30}
          height={38}
        />
      </Link>
      <div className='hidden fixed top-0 left-0 z-10 w-full h-[75px] bg-[#141416] lg:block' />
    </>
  );
}

export default Overlay;
