import React from 'react';
import plane from '../../helpers/images/plane.jpeg';

export default function Schedule() {
  return (
    <div className="Schedule-Page">
      <div id="schedule-image" className="Section" style={{ backgroundImage: `url(${plane})` }}></div>
      <section className='schedule-section'>
        <h1 className='schedule-header'>2021 Schedule</h1>
        <p className='schedule-body'>TBD &#128526;</p>
      </section>
    </div>
  );
}
