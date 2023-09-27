import '../App.css';
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import QRcode from '../media/img/qr_code.png';
import logo from '../media/images/logo.png';
import { Link } from 'react-router-dom';


export default function Footer() {
    const [messageError, setMessageError] = useState("");
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterError, setNewsletterError] = useState("");
    const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  
    const handleNewsletterSubmit = (e) => {
      e.preventDefault(); // Empêche le comportement de soumission par défaut
  
      // Réinitialiser le message d'erreur et le contenu du champ
      setNewsletterError("");
      setNewsletterEmail("");
  
      // Récupérer la valeur du champ email
      const email = e.target.email.value;
  
      // Regex pour validation d'e-mail
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(email)) {
        setNewsletterError("Veuillez entrer une adresse email valide");
      } else {
        // Traitez ici votre logique d'inscription à la newsletter, si nécessaire
  
        // Ouvre la fenêtre modale de la newsletter une fois inscrit avec succès
        setIsNewsletterModalOpen(true);
      }
    };
    return (
        <div className="footer">
            <div className="element_footer">

                <div className='elem1'>
                    <img src={logo} alt="Example" />
                    <p>Moyen de paiement</p>
                    <div className='icon'>
                        <Icon icon="circum:credit-card-1" color="white" width="60" height="60" />
                        <Icon icon="teenyicons:paypal-solid" color="white" width="50" height="50" />
                    </div>
                </div>

                <div className='elem2'>
                    <p>Nos réseaux sociaux </p>
                    <div className='icon'>
                        <Icon icon="la:facebook" color="white"  />
                        <Icon icon="bi:instagram" color="white"  />
                        <Icon icon="ph:tiktok-logo-thin" color="white" />
                        <Icon icon="uit:twitter-alt" color="white"  />
                    </div>
                    <p>ou</p>
                    <form className='button_contact'> <Link to={"/contact"}> Nous contacter</Link></form>
                   
                    
                </div>
                <div className='elem3'>
                    <p>Newsletter</p>
                    <img src={QRcode} alt="Example" />
                    {newsletterError && (
            <span className="error-message">{newsletterError}</span>)}
            <form method="GET" onSubmit= {handleNewsletterSubmit} id="form_news" >
                    <input type="text" placeholder="Entrez votre email..." name="email" required></input>
                    <button className='button_news' type="submit">Validez</button>
                    </form>
                </div>

            </div>
       
  {/* Fenêtre modale de la newsletter */}
  {isNewsletterModalOpen && (
    <div className="modal-overlay">
      <div className="modal_news">
        <div className="modal-content_news">
          <h3>Inscription réussie</h3>
          <p>Vous êtes bien inscrit à notre newsletter !</p>
          <button onClick={() => setIsNewsletterModalOpen(false)}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  )}
        </div>
 

    );

}
