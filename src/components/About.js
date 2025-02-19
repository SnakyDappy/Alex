import React from 'react';
import Photo1 from '../photos/photo (1).jpeg';

function About() {
  return (
    <section id="about" className="about background" >
      <img src={Photo1} alt="Am fost obligat sa fac descrierea asta"/>
      <div>
        <h2 className='neonGold'>Despre Noi:</h2>
        <p className='gradient'>ceva ceva ceva</p>
      </div>
    </section>
  );
}

export default About;
