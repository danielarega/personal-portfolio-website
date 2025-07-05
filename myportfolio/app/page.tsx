// ./app/page.tsx

import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as needed
import Header from './components/Header';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}
