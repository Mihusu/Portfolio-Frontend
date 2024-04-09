"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
  {
    title: "About",
    path: "#About",
  },
  {
    title: "Projects",
    path: "#Projects",
  },
  {
    title: "Contact",
    path: "#Contact",
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    // Check if window object is defined (to avoid server-side rendering issues)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-12 py-4'>
        <Link 
          href={"/"} 
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          LOGO
        </Link>
        {windowWidth < 768 && (
          <div className='mobile-menu block md:hidden'>
            {
              !navbarOpen ? (
                <button 
                  onClick={() => setNavbarOpen(true)} 
                  className='flex items-center px-3 py-2 border rounded border-slate-200 text slate-200 hover:text-white'
                >
                  <Bars3Icon className="h-5 w-5"/>
                </button>
              ) : (
                <button 
                  onClick={() => setNavbarOpen(false)} 
                  className='flex items-center px-3 py-2 border rounded border-slate-200 text slate-200 hover:text-white'
                >
                  <XMarkIcon className="h-5 w-5"/>
                </button>
              )
            }
          </div>
        )}
        <div className={`menu ${windowWidth >= 768 ? 'block' : 'hidden'} md:block md:w-auto`} id="Navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}/>
              </li>
              ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar;