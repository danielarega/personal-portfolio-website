"use client";

import React from 'react'
import Image from'next/image'
import { assets } from '../../assets/assets.js'      
import { motion } from "framer-motion"

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center  justify-center gap-4'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0,type:"spring", stiffness:100}}
      >
        <Image src={assets.profile_img} alt="profile" className=' rounded-full w-32 h-32 object-cover' />

      </motion.div>

        <motion.h3 
        initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6,delay:0.3}}
        
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'> Hi! I'm Daniel Arega <Image src={assets.hand_icon} alt="handicon" className=' w-6' /></motion.h3>

              <motion.h1 
              initial={{y:-30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8,delay:0.5}}
        
              className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>frontend web developer in ethiopia</motion.h1>
              <motion.p 
              
              initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.7}}
        
              className='max-w-2xl mx-auto font-ovo'>I am a junior frontend developer from ethiopia with modern stack technologies to build responsive and user-friendly web application </motion.p>

 <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
<motion.a
initial={{y:30, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{duration:0.6,delay:1.2}}
        href="#contact" className='px-10 py-3 border border-white  rounded-full bg-black text-white  flex items-center gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} alt="" className=' w-4' /></motion.a>

<motion.a
initial={{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6,delay:1.2}}

href="/myresume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt="" className=' w-4' /></motion.a>

              </div>
    </div>
  )
}

export default Header;
