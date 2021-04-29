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
      <div className='images-container'>
            <img src="shine-noel.jpeg" alt='' />
            <img src="shine-kels.JPG" alt='' />
            <img src="shine-trip-d copy.JPG" alt='' />
            <img src="shine-audrey.JPG" alt='' />
            <img src="shine-kream.JPG" alt='' />
            <img src="shine-sadie-layout.JPG" alt='' />
            <img src="shine-cam-jump.jpg" alt='' />
            <img src="shine-kels-grab.jpg" alt='' />
            <img src="shine-aaron.JPG" alt='' />
            <img src="shine-steven.JPG" alt='' />
            <img src="shine-jeff-grab.jpg" alt='' />
            <img src="shine-sadie.JPG" alt='' />
            <img src="shine-booty.JPG" alt='' />
            <img src="shine-trip-grab.JPG" alt='' />
            <img src="shine-circle.JPG" alt='' />
            <img src="shine-plane.JPG" alt='' />
            <img src="shine-trip-flag.JPG" alt='' />
            <img src="shine-wacker.JPG" alt='' />
        </div>
        {/* <div class="video1">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/s_ezCrowWbg" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jXOFOk7GIn8" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
      <Gallery photos={gallery} />
      {/* {gallery.map((image) => <img className='gallery-image' src={image.src[1]} alt='' />)} */}
      {/* <img className='gallery-image' src={plane} alt=''/> */}
    </div>
  );
}
