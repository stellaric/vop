import logo from "../media/img/logo_vop.png";
import { Link } from "react-router-dom";
import React  from "react";
import "../App.css";
import "../mobile.css";


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


export default function Navbar() {
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
          <Link to={"/activite"}>Activités</Link>
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


    <div className="menu_mobile">
        <span className="burger" onClick={openNav}>
          ☰
        </span>
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <div className="overlay-content">
          <Link to={"/"}>
            <img src={logo} alt="logo_navbar" width="150px" />
          </Link>

             <Link to={"/vol"}>Vols</Link>
          <Link to={"/hotel"}>Hôtels</Link>
          <Link to={"/destination"}>Destinations</Link>
          <Link to={"/activite"}>Activités</Link>
          </div>
        </div>
        </div>
      </nav>

</>
  );
}
