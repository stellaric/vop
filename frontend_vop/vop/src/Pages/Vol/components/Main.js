import React from "react";
import "../Vol.css";
import test from "../../../media/img/fd_2.jpg";
export default function Main() {
  return (
    <main className="main_vol">
      <h1>Vol</h1>
      <p>
        Chez Vient On Part, nous croyons que le monde devrait être accessible à
        tous les voyageurs. C'est pourquoi nous sommes fiers de vous proposer
        une sélection exceptionnelle de vols pas chers vers toutes les
        destinations continentales. Que vous rêviez de flâner le long des plages
        dorées de l'Europe, d'explorer les merveilles de l'Asie, de découvrir la
        diversité de l'Amérique du Nord, de vous immerger dans la culture de
        l'Amérique du Sud, ou d'explorer les paysages époustouflants de
        l'Afrique, nous avons des offres spéciales qui vous permettent de
        réaliser vos rêves de voyage sans vous ruiner.
      </p>

      <section className="filtre">
        <div className="filtre">
          <div className="filtre_content">filtre</div>
        </div>
      </section>

      <h2>Europe</h2>
      <section className="europe">
        <div className="card">
          <div className="card_img">
            <p>ceci est un test </p>
          </div>
          <div className="card_content">
            <p>ceci est un test </p>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <p>ceci est un test </p>
          </div>
          <div className="card_content">
            <p>ceci est un test </p>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <p>ceci est un test </p>
          </div>
          <div className="card_content">
            <p>ceci est un test </p>
          </div>
        </div>
      </section>

      <h2>Asie</h2>
      <section className="asie">
        <div className="card">c</div>
        <div className="card">c</div>
        <div className="card">c</div>
      </section>

      <h2>Amérique</h2>
      <section className="amerique">
        <div className="card">c</div>
        <div className="card">c</div>
        <div className="card">c</div>
      </section>

      <h2>Afrique</h2>
      <section className="afrique">
        <div className="card">c</div>
        <div className="card">c</div>
        <div className="card">c</div>
      </section>
    </main>
  );
}
