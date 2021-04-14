import React from 'react';
import About from '../About';
import huckfest from '../../helpers/images/huckfest.jpeg';

export default function Home() {
  return (
    <div className="home-page">
      <div className="Home" id='section'
      style={{
        backgroundImage: `url(${huckfest})`,
      }}></div>
      <div className='divider'></div>
      <About />
    </div>
  );
}
