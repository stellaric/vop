import React from "react";
import "../Accueil.css";
import Carousel from './Carousel'; 
import imgDest1 from "../../../media/img/img_dest_1.jpg";
import imgDest2 from "../../../media/img/img_dest_2.jpg";
import imgDest3 from "../../../media/img/img_dest_3.jpg";
import slide1 from '../../../media/img/slide1.png'
import slide2 from '../../../media/img/slide2.png'
import slide3 from '../../../media/img/slide3.png'
import jade from "../../../media/img/jade.jpg"
import martinaise from "../../../media/img/martinaise.jpg"
import stella from "../../../media/img/stella.jpg"




const images = [
  slide1,
  slide2,
  slide3,
 
];

export default function Main() {
  
  
  return (
    <main className="main_accueil">
      {/*section : destination populaire */}
      <section className="destination">
        <h2>Nos Destinations Populaires</h2>

        <div className="destination_card">
          <div className="card_portugal">
            <img src={imgDest1} alt="img_portugal" />
            
            </div>
         

          <div className="card_italie">
            <img src={imgDest2} alt="img_italie" />
           
            </div>
  

          <div className="card_paris">
            <img src={imgDest3} alt="img_paris" />
           
            </div>
          </div>
 
      </section>
      {/*section : slide */}
      <section className="slide">
  <Carousel images={images} />
</section>


      {/*section : team */}
      <section className="team">
       
        <h2>Notre Team </h2>
        <div className="card_team">
          <div className="card_team_content">
            <img src={jade} alt="img_jade" />
            <h3>Jade</h3>
            <p>Jade, notre exploratrice passionnée, déniche les destinations les plus captivantes et insolites, transformant chaque voyage en une aventure unique.</p>
          </div>
          <div className="card_team_content">
            <img src={martinaise} alt="img_martinaise" />
            <h3>Martinaise</h3>
            <p>Martinaise crée des itinéraires exceptionnels, mêlant art et science pour que chaque étape de votre voyage soit une expérience mémorable.</p>
          </div>
          <div className="card_team_content">
            <img src={stella} alt="img_stella" />
            <h3>Stella</h3>
            <p>Stella établit des liens profonds avec chaque client, personnalisant chaque voyage pour le rendre authentique et inoubliable, de la réservation aux conseils spéciaux.</p>
          </div>
        </div>
      
      </section>

      {/*section : temoignage
      <section className="temoignage">
        <h2>témoignage</h2>
        <div className="card_temoignage">
          <p>"ceci est un temoignage"</p>
          <div className="card_temoignage_footer">
            <p>-Happy Meal</p>
          </div>
        </div>
      </section>
  */}
    </main>
  );
}
