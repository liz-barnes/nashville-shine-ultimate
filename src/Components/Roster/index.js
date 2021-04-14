import React from 'react';
import roster19 from '../../helpers/data/roster2019';

export default function Roster() {
  return (
    <div id='roster-page' className='page'>
      <section>
      </section>
      <section>
        <h2>the humans of 'shine</h2>
        <div className='roster-container'>
          <div className=''>
            <h4>2019</h4>
            {roster19.map((player) => <li>{player.name}</li>)}
          </div>
        </div>
      </section>
      <h2>Roster</h2>
    </div>
  );
}
