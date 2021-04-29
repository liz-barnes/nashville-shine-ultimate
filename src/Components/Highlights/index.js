import React from 'react';
import Gallery from 'react-photo-gallery';
import gallery from '../../helpers/data/gallery';

export default function Highlights() {
  // const gallery = [
  //   {
  //     src: 'images/shine-booty.jpg',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'images/shine-trip-d2.jpg',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'images/shine-kels.jpg',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'images/shine-sadie-layout.jpg',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'images/shine-audrey.jpg',
  //     width: 4,
  //     height: 3,
  //   },

  // ];

  return (
    <div className="Highlights-Page">
      <div className="gallery-container">
        <Gallery photos={gallery} />
      </div>
      <div className='highlight-videos'>
        {/* TO DO: View full screen for YouTube */}
        {/* TO DO: Make video size responsive */}
        <div className='video'>
          <iframe
            title='shine-hodown'
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/s_ezCrowWbg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className='video'>
          <iframe
            title='shine-sectionals'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jXOFOk7GIn8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
