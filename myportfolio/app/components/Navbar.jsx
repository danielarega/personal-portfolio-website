"use client";

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { assets } from '../../assets/assets.js'  
import {useEffect} from 'react'

const Navbar = () => {
  const [isScroll, setIsScoll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScoll(true);
      } else {
        setIsScoll(false);
      }
    });
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="bgcolor" className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image src={assets.logo} alt="Logo" width={112} height={40} />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Sevices</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact me </a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="moon" className='w-6' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" width={12} height={12} className="w-3" />
          </a>

          <button className='block:md hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className='w-6' />
          </button>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt="blacker" className='w-6 cursor-pointer' />
          </div>
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About me</a></li>
          <li><a onClick={closeMenu} href="#services">Sevices</a></li>
          <li><a onClick={closeMenu} href="#work">My Work</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact me </a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
