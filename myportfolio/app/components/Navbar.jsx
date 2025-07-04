import Image from 'next/image';


import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
 
<a href=""> 
    
<Image src="" alt="Logo" width={112} height={40} className='w-28 cursor-pointer mr-14' />

     </a>
<ul>
  <li><a href="#top">Home</a></li>  
  <li><a href="#about">About me</a></li>  
  <li><a href="#services">Sevices</a></li>  
  <li><a href="#work">My Work</a></li>  
  <li><a href="#contact">Contact me </a></li> 
</ul>
 <div>
    <a href="#contact">contact  <Image src="/assets/arrow-icon.png" alt="Arrow Icon" width={12} height={12} className="w-3 inline" />
</a> 
 </div>

    </nav>
    </>
  )
}

export default Navbar
