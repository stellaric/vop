import React, { useState } from "react";
import "../Inscription.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Inscription() {
  const [sexe, setSexe] = useState("Mme");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [acceptePolitique, setAcceptePolitique] = useState(false);
  const [activeTab, setActiveTab] = useState("inscription"); // Default to the "Inscription" tab
  const [ConfirmPassWord, setConfirmPassWord] = useState();
  const [newUser, setNewUser] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:5001/api/user/register", {
      ...newUser,
    });
    console.log(resp?.data?.message);
    if (resp.status === 201) {
      setTimeout(() => {
        toast.success(`👍 ${resp?.data?.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      
    }
    
  };
  // fonction pour récupere la saisie de l'utilisateur
  const handleInput = (e) => {
    const { name, value } = e.target;
    // on fait une copie de ce que l'utilisateur a saisit
    const newUserCopy = { ...newUser };
    // on met l'objet copier icic et on lui donne la valeur ddu champs
    newUserCopy[name] = value;
    setNewUser(newUserCopy);
  };

  return (
    <div>
      <ToastContainer />
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

          <button className={
              activeTab === "connexion" ? "tablinks active" : "tablinks"
            }
            onClick={() => handleTabClick("connexion")} >
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
            <div className="radio">
              <div>
                <input
                  type="radio"
                  id="monsieur"
                  name="civilite"
                  onChange={handleInput}
                />
                <label htmlFor="monsieur">M.</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="madame"
                  name="civilite"
                  onChange={handleInput}
                />
                <label htmlFor="madame">Mme</label>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="lastname"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  name="firstname"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleInput}
                />
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
                  // recupéré ce que la personne a saisit pour comparere a ppres avec le mot de passe saisit
                  onChange={(e) => confirmationMotDePasse(e.target.value)}
                />
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="accepter_conditions"
                onChange={handleInput}
              />
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
