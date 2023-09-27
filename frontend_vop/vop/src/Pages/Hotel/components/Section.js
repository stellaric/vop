import React, { useState } from 'react';
import Modal from "./Modal"; 

import '../Hotel.css';

export default function Section(props) {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitre, setSelectedTitre] = useState(''); // Ajoutez un état pour la description
  const [selectedDescription, setSelectedDescription] = useState(''); // Ajoutez un état pour la description
  const [selectedPrix, setSelectedPrix] = useState(''); // Ajoutez un état pour la description
  const [selectedLien, setSelectedLien] = useState(''); // Ajoutez un état pour la description
 

  const openModal = (imgUrl,titre,description,prix,lien) => {
    setSelectedImage(imgUrl);
    setSelectedTitre(titre); 
    setSelectedDescription(description); // Utilisez setSelectedDescription pour stocker la description
    setSelectedPrix(prix); 
    setSelectedLien(lien); 
    setModalVisibility(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setSelectedDescription(''); // Réinitialisez également la description lorsque le modal se ferme
    setModalVisibility(false);
  };

  return (
    <>
      <section className="container_vol">
        <div className="card_vol">
          <div className="card_vol_img">
            <img src={props.image1} alt="" />
          </div>
          <div className="card_contenu">
          <h3>{props.titre1}</h3>
            <p>{props.description1}</p>
            <p className='prix'>{props.prix1}</p>
          </div>
          <div className="card_vol_footer">
            <button onClick={() => openModal(props.image1,props.titre1, props.description1,props.prix1,props.lien1)}>Voir plus</button>
          </div>
        </div>
        <div className="card_vol">
          <div className="card_vol_img">
            <img src={props.image2} alt="" />
          </div>
          <div className="card_contenu">
          <h3>{props.titre2}</h3>
            <p>{props.description2}</p>
            <p className='prix'>{props.prix2}</p>
          </div>
          <div className="card_vol_footer">
            <button onClick={() => openModal(props.image2,props.titre2, props.description2,props.prix2,props.lien2)}>Voir plus</button>
          </div>
        </div>

        <div className="card_vol">
          <div className="card_vol_img">
            <img src={props.image3} alt="" />
          </div>
          <div className="card_contenu">
          <h3>{props.titre3}</h3>
            <p>{props.description3}</p>
            <p className='prix'>{props.prix3}</p>
          </div>
          <div className="card_vol_footer">
            <button onClick={() => openModal(props.image3,props.titre3, props.description3,props.prix3,props.lien3)} >Voir plus</button>
          </div>
        </div>
      </section>

      {isModalVisible && (
        <Modal
          imgUrl={selectedImage}
          titre={selectedTitre}
          description={selectedDescription}
          prix={selectedPrix}
          lien={selectedLien}
          onClose={closeModal}
        />
      )}
    </>
  );
}
