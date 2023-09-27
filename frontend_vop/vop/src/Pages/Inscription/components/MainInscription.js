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

          {/* formulaire inscription */}
        </div>
        <form
          className={
            activeTab === "inscription" ? "tabcontent active" : "tabcontent"
          }
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <input type="radio" id="mosieur" name="civilite" />
              <label htmlFor="mosieur">M</label>{" "}
            </div>
            <div>
              <input type="radio" id="madame" name="civilite" />
              <label htmlFor="madamer">Mme</label>
            </div>

            <div>
              <div>
                <input type="radio" id="mosieur" name="civilite" />
                <label htmlFor="mosieur">M</label>
              </div>  

            </div>
          </div>
        </form>
        {/* formulaire connexion */}

        <form
          className={
            activeTab === "connexion" ? "tabcontent active" : "tabcontent"
          }
          onSubmit={handleSubmit}
        ></form>
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
