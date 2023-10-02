import React, { useState } from "react";
import italieImage from "..//../../media/img1/italie.jpg";

import greceImage from "..//../../media/img1/grece.jpg";
import espagneImage from "..//../../media/img1/espagne.jpg";
import japonImage from "..//../../media/img1/japon.jpg";
import baliImage from "..//../../media/img1/bali.jpg";
import thailandeImage from "..//../../media/img1/thailande.jpg";
import costaRicaImage from "..//../../media/img1/costarica.jpg";
import mexiqueImage from "..//../../media/img1/mexique.jpg";
import nicaraguaImage from "..//../../media/img1/nicaragua.jpg";
import camerounImage from "..//../../media/img1/cameroun.webp";
import tchadImage from "..//../../media/img1/tchad.jpg";
import beninImage from "..//../../media/img1/benin.jpg";

const DropdownActivite = () => {
  // État pour stocker le pays sélectionné et son image
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fonction pour gérer le clic sur un pays
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <section className="dropdown">
      <div className="dropdown-menu">
        <div className="dropdown-europe">
          <h4>Europe</h4>
          <ul>
            <li onClick={() => handleCountryClick("Italie")}>Italie</li>
            <li onClick={() => handleCountryClick("Grèce")}>Grèce</li>
            <li onClick={() => handleCountryClick("Espagne")}>Espagne</li>
          </ul>
        </div>

        <div className="dropdown-asie">
          <h4>Asie</h4>
          <ul>
            <li onClick={() => handleCountryClick("Japon")}>Japon</li>
            <li onClick={() => handleCountryClick("Bali")}>Bali</li>
            <li onClick={() => handleCountryClick("Thaïlande")}>Thaïlande</li>
          </ul>
        </div>

        <div className="dropdown-amerique">
          <h4>Amérique</h4>
          <ul>
            <li onClick={() => handleCountryClick("Costa Rica")}>Costa Rica</li>
            <li onClick={() => handleCountryClick("Mexique")}>Mexique</li>
            <li onClick={() => handleCountryClick("Nicaragua")}>Nicaragua</li>
          </ul>
        </div>

        <div className="dropdown-afrique">
          <h4>Afrique</h4>
          <ul>
            <li onClick={() => handleCountryClick("Cameroun")}>Cameroun</li>
            <li onClick={() => handleCountryClick("Tchad")}>Tchad</li>
            <li onClick={() => handleCountryClick("Bénin")}>Bénin</li>
          </ul>
        </div>
      </div>

      {/* Affichez l'image du pays sélectionné */}
      {selectedCountry && (
        <div className="selected-country">
          <h2>{selectedCountry}</h2>
          <img
            src={
              selectedCountry === "Italie"
                ? italieImage 
               

                : selectedCountry === "Grèce"
                ? greceImage

                : selectedCountry === "Espagne"
                ? espagneImage
                : selectedCountry === "Japon"
                ? japonImage
                : selectedCountry === "Bali"
                ? baliImage
                : selectedCountry === "Thaïlande"
                ? thailandeImage
                : selectedCountry === "Costa Rica"
                ? costaRicaImage
                : selectedCountry === "Mexique"
                ? mexiqueImage
                : selectedCountry === "Nicaragua"
                ? nicaraguaImage
                : selectedCountry === "Cameroun"
                ? camerounImage
                : selectedCountry === "Tchad"
                ? tchadImage
                : selectedCountry === "Bénin"
                ? beninImage
                : ""
            }
            alt={selectedCountry}
          />
        </div>
      )}
    </section>
  );
};

export default DropdownActivite;