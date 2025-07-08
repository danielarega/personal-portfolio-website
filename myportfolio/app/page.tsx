// ./app/page.tsx

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Adjust the path as needed
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function Home() {

  const [isDarkMode, setIsDarkMode]=useState(true)

  useEffect(()=>{
if (localStorage.theme==='dark' ||(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
  setIsDarkMode(true)
} else {
  setIsDarkMode(false)
}
  },[])
  useEffect(()=>{
if(isDarkMode){
  document.documentElement.classList.add('dark');
  localStorage.theme='dark';
}else{
  document.documentElement.classList.remove('dark');
  localStorage.theme='';


}
  },[isDarkMode])
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact />
      <Footer/>
    </div>
  );
}
