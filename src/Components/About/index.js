import React from 'react';
import fives from '../../helpers/images/fives.jpeg';

export default function About() {
  return (
    <div id='about-page'>
      <section id='about-us' className='page' style={{ backgroundImage: `url(${fives})` }}>
          <h1 className='blurb'>Nashville Elite Mixed Ultimate Frisbee Club</h1>
          <p className='SCF'>Spirit. Competition. Fun.</p>
      </section>
      <div id='shine-blurb' className='Section'>
        <p class='shine-blurb'>
          'Shine is a competitive, mixed club team based in Nashville,
          Tennessee. We strive for a lasting culture of competition, integrity,
          respect, fun, and development that benefits our players and improves
          ultimate in the Nashville community.
        </p>
      </div>
    </div>
  );
}
