import React from 'react';
import sectionals from '../../helpers/images/sectionals.jpeg';
import roster19 from '../../helpers/data/roster2019';

export default function Roster() {
  return (
    <div id='roster-page' className='page'>
      <div className='Section' style={{
        backgroundImage: `url(${sectionals})`,
      }}>
      </div>
      <section>
        <h2 className='roster-header'>the humans of 'shine</h2>
        <div className='rosters-container'>
        <div className='roster'>
            <h4 className='year'>2021</h4>
            <li>coming soon!</li>
          </div>
          <div className='roster'>
            <h4 className='year'>2019</h4>
            {roster19.map((player) => <li>{player.name}</li>)}
          </div>
          <div className='roster'>
            <h4 className='year'>2018</h4>
            {roster19.map((player) => <li>{player.name}</li>)}
          </div>
        </div>
      </section>
    </div>
  );
}
