import React from "react";
import "../Accueil.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Styles CSS de la bibliothèque
import { Carousel } from "react-responsive-carousel";
import test from "../../../media/img/slide1.jpg";
import imgDest1 from "../../../media/img/img_dest_1.jpg";
import imgDest2 from "../../../media/img/img_dest_2.jpg";
import imgDest3 from "../../../media/img/img_dest_3.jpg";
import jade from "../../../media/img/jade.jpg"
import martinaise from "../../../media/img/martinaise.jpg"
import stella from "../../../media/img/stella.jpg"


export default function Main() {

  
  return (
    <main className="main_accueil">
      {/*section : destination populaire */}
      <section className="destination">
        <h2>Nos Destinations Populaires</h2>

        <div className="destination_card">
          <div className="card_portugal">
            <img src={imgDest1} alt="img_portugal" />
            <h4>Lisbonne</h4>
            <p>Description</p>
            </div>
         

          <div className="card_italie">
            <img src={imgDest2} alt="img_italie" />
            <h4>Lisbonne</h4>
            <p>Description</p>
            </div>
  

          <div className="card_paris">
            <img src={imgDest3} alt="img_paris" />
            <h4>Lisbonne</h4>
            <p>Description</p>
            </div>
          </div>
 
      </section>
      {/*section : slide */}
      <section className="slide">
      <Carousel>
        <div className="slide1">
       
        </div>
        <div className="slide2">
       
        </div>
        <div className="slide3">
    
        </div>
       
      </Carousel>
      </section>

      {/*section : team */}
      <section className="team">
        <h2>Notre Team </h2>
        <div className="card_team">
          <div className="card_team_content">
            <img src={jade} alt="img_jade" />
            <h3>Jade</h3>
            <p>ceici est un texte</p>
          </div>
          <div className="card_team_content">
            <img src={martinaise} alt="img_martinaise" />
            <h3>Martinaise</h3>
            <p>ceici est un texte</p>
          </div>
          <div className="card_team_content">
            <img src={stella} alt="img_stella" />
            <h3>Stella</h3>
            <p>ceici est un texte</p>
          </div>
        </div>
      </section>

      {/*section : temoignage*/}
      <section className="temoignage">
        <h2>témoignage</h2>
        <div className="card_temoignage">
          <p>"ceci est un temoignage"</p>
          <div className="card_temoignage_footer">
            <p>-Happy Meal</p>
          </div>
        </div>
      </section>
    </main>
  );
}
