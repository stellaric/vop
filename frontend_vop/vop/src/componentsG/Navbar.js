import logo from "../media/img/logo_vop.png";
import { Link } from "react-router-dom";
import React, { useState }  from "react";
import "../App.css";
import DropdownActivite from "../Pages/Activity/components/DropdownActivite";

export default function Header() {
  //ajoux de dropdown sur activité
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <>
      {/*navbar*/}
    <nav className="navbar">

        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo_navbar" width="150px" />
          </Link>
        </div>

        <div className="onglets">
          <Link to={"/vol"}>Vols</Link>
          <Link to={"/hotel"}>Hôtels</Link>
          <Link to={"/destination"}>Destinations</Link>
          {/* // quand on click on nevois a la fonction qui permet de'afficher la liste déroulante si on fait rien rien ne s'affiche */}
          <Link to={"/activite"} onClick={() => setDropdownVisible(!dropdownVisible)}>
            Activités
          </Link>
          </div>

        <div className="onglets_icon">  
          <div className="flag">
            <span className="iconify" data-icon="emojione-v1:flag-for-france" />
            <span className="iconify" data-icon="emojione-v1:flag-for-united-kingdom" />
          </div>


          <div className="icon_auth">
            <Link to={"/authentification"}>
              <span
                className="iconify"
                data-icon="iconamoon:profile-circle-thin"
              />
            </Link>
          </div>
        </div>
      </nav>
    {/* Afficher le dropdown s'il est visible */}
      {dropdownVisible && <DropdownActivite />}

</>
  );
}







