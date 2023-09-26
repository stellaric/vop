import "../../Contact/contact.css"
import map from "../../../media/images/map.png";
import React, { useState } from "react";

export default function Main() {
   
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [sujetError, setSujetError] = useState("");
  const [messageError, setMessageError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement de soumission par défaut

    // Réinitialiser les messages d'erreur
    setEmailError("");
    setSujetError("");
    setMessageError("");

    // Récupérer les valeurs des champs
    const email = e.target.email.value;
    const sujet = e.target.sujet.value;
    const message = e.target.message.value;

    // Regex pour validation d'e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide");
      isValid = false;
    }

    if (sujet.trim() === "") {
      setSujetError("Veuillez entrer un sujet");
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError("Veuillez entrer un message");
      isValid = false;
    }

    if (isValid) {
      // Traitez ici votre logique d'envoi de message, si nécessaire

      // Ouvre la fenêtre modale une fois que le formulaire a été soumis avec succès
      setIsModalOpen(true);
    }
  };
    return (
        <div className="main">

            <div className="contact_content">
            <div className="titre">
                <h1>Nous contacter</h1>
            </div>


          
            <div className="section_contact">
           
            

                <form name="contact" method="GET" className="contact_form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />

                    <div className={`label_email ${emailError ? 'error' : ''}`}>
                    <label for="email">Email: </label>
                    <input type="email" name="email" placeholder="Entrez votre email..." required/>
                    {emailError && <span className="error-message">{emailError}</span>}
                    </div>


                    <div className={`label_sujet ${sujetError ? 'error' : ''}`}>
                    <label for="sujet">Sujet: </label>
                    <textarea name="sujet" placeholder="Sujet de votre message..." required></textarea>
                    {sujetError && <span className="error-message">{sujetError}</span>}
                    </div>


                    <div className={`label_message ${messageError ? 'error' : ''}`}>
                    <label for="message" >Message: </label>
                    <textarea style={{ height: "150px" }} name="message" placeholder="Entrez votre message..." required></textarea>
                    {messageError && <span className="error-message">{messageError}</span>}
                    </div>


                    <button type="submit">Validez</button>

                </form>
            </div>
            </div>




            <container className="adresse">
                <div className="content_adresse">
                    <div className="section_map">
                    <img src={map} alt="Map" />
                    </div>
                    <div className="coordonnée">
                        <h2>Nos coordonnées</h2>
                        <p>ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz </p>

                    </div>
                </div>

            </container>

        </div>

    );

} 
