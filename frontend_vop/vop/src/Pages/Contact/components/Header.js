import logo from "../../../media/img/logo_navbar.png";
import { Link } from "react-router-dom";
import React , { useState } from "react";
import "../../Contact/contact.css";

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <header className="header_contact">
      
      {/*navbar*/}
    <nav className="navbar">

        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo_navbar" width="150px" />
          </Link>
        </div>

        <div className="onglets">
          <Link to={"/vol"}>Vol</Link>
          <Link to={"/hotel"}>Hôtels</Link>
          <Link to={"/destination"}>Destinations</Link>
          <div className="dropdown" onClick={toggleDropdown}>
          <Link to={"/activite"}>Activités</Link>
          </div>
          {dropdownOpen && (
        <div className="dropdown-content">
          {/* Contenu de votre dropdown */}
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
  
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


     
    </header>
  );
}



