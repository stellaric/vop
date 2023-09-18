import logo from "../../../media/img/logo_vop.png";
import { Link } from "react-router-dom";
import React  from "react";
import "../../../App.css";

export default function Header() {

 
  return (
    <div className="navbar">
      {/*navbar*/}
    <nav>

        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo_navbar" width="150px" />
          </Link>
        </div>

        <div className="onglets">
          <Link to={"/vol"}>Vol</Link>
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
      </nav>

</div>
  );
}
