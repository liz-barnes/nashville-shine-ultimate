import React from 'react';
import Gallery from 'react-photo-gallery';
// import gallery from '../../helpers/data/gallery';
// import plane from '../../helpers/images/plane.jpg';
import plane from '../../helpers/images/plane.jpg';

export default function Highlights() {
  const gallery = [
    {
      src: { plane },
      width: 4,
      height: 3,
    },
    {
      src: '/static/media/plane.1c859e61.jpg',
      width: 1,
      height: 1,
    },
  ];

  return (
    <div className="Highlights-Page">
      <Gallery photos={gallery} />
      {/* {gallery.map((image) => <img className='gallery-image' src={image.src[1]} alt='' />)} */}
      {/* <img className='gallery-image' src={plane} alt=''/> */}
      {console.warn(gallery[1].src.plane)}
      {/* <img src='plane.jpg' alt=''/> */}
    </div>
  );
}
