import React from 'react';
import Photo1 from '../photos/photo (1).jpeg';

function About() {
  return (
    <section id="about" className="about background" >
      <img src={Photo1} alt="Am fost obligat sa fac descrierea asta"/>
      <div>
        <h2 className='neonGold'>Despre Noi:</h2>
        <p className='gradient'>La Shot by Shot Events, ne dedicăm pasiunii de a crea torturi de shoturi alcoolice delicioase și inovative, care aduc o notă de originalitate la fiecare eveniment. Fiecare tort este realizat cu grijă și atenție la detalii, folosind ingrediente de calitate superioară și rețete unice, inspirate din cele mai populare băuturi alcoolice.

Indiferent dacă sărbătoriți o aniversare, o nuntă sau orice altă ocazie specială, torturile noastre de shoturi sunt alegerea perfectă pentru a adăuga un plus de savoare și distracție. Suntem aici pentru a transforma orice eveniment într-o amintire de neuitat, printr-o combinație perfectă de gusturi și prezentare.

Ne mândrim cu dedicarea noastră față de clienți și ne asigurăm că fiecare tort reflectă stilul și dorințele tale. Viziunea noastră este să aducem o experiență gustativă rafinată, care să încânte atât ochii, cât și papilele gustative.</p>
      </div>
    </section>
  );
}

export default About;
