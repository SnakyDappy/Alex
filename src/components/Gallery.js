import React from 'react';
import Photo1 from '../photos/photo (4).jpeg';
import Photo2 from '../photos/photo (5).jpeg';
import Photo3 from '../photos/photo (6).jpeg';
import Photo4 from '../photos/vertical (1).jpeg';


function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <img src={Photo1} alt="Cocktail Cake 1" />
      <img src={Photo2} alt="Cocktail Cake 2" />
      <img src={Photo3} alt="Cocktail Cake 3" />
      <img src={Photo4} alt="Cocktail Cake 4" />
    </section>
  );
}

export default Gallery;
