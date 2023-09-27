import React, { useState } from "react";
import "../Inscription.css";

function Inscription() {
  const [sexe, setSexe] = useState("Mme");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [acceptePolitique, setAcceptePolitique] = useState(false);
  const [activeTab, setActiveTab] = useState("inscription"); // Default to the "Inscription" tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting the registration or login form here, e.g., API request or client-side validation.
  };

  return (
    <div>
      <div className="form-container">
        <div className="tab">
          <button
            className={
              activeTab === "inscription" ? "tablinks active" : "tablinks"
            }
            onClick={() => handleTabClick("inscription")}
          >
            Inscription
          </button>

          <button
            className={
              activeTab === "connexion" ? "tablinks active" : "tablinks"
            }
            onClick={() => handleTabClick("connexion")}
          >
            Connexion
          </button>
        </div>
        <div className="form-wrapper">
          {/* formulaire inscription */}
          <form
            className={
              activeTab === "inscription" ? "tabcontent active" : "tabcontent"
            }
            onSubmit={handleSubmit}
          >
            {/* ... Votre code de formulaire d'inscription existant ... */}
            <div>
              <div>
                <input type="radio" id="monsieur" name="civilite" />
                <label htmlFor="monsieur">M.</label>
              </div>
              <div>
                <input type="radio" id="madame" name="civilite" />
                <label htmlFor="madame">Mme</label>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" />
              </div>
              <div>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password_confirmation">
                  Confirmation de mot de passe
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                />
              </div>
            </div>

            <div>
              <input type="checkbox" id="accepter_conditions" />
              <label htmlFor="accepter_conditions">
                J'accepte la politique de confidentialité
              </label>
            </div>

            <button type="submit">S'inscrire</button>
          </form>

          {/* formulaire connexion */}
        </div>

        {/* formulaire connexion */}
        {activeTab === "connexion" && (
          <div className="form-wrapper">
            <form
              className={
                activeTab === "connexion" ? "tabcontent active" : "tabcontent"
              }
              onSubmit={handleSubmit}
            >
              <div>
                <div>
                  <label htmlFor="emailConnexion">Email</label>
                  <input
                    type="text"
                    name="emailConnexion"
                    id="emailConnexion"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="passwordConnexion">Mot de passe</label>
                  <input
                    type="password"
                    name="passwordConnexion"
                    id="passwordConnexion"
                  />
                </div>
              </div>

              <button type="submit">Se connecter</button>
            </form>
          </div>
        )}

        {activeTab === "connexion" && (
          <p>
            Déjà membre? <a href="#">Connectez-vous ici</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Inscription;
