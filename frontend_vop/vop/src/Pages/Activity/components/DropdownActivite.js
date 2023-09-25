import React from "react";

const DropdownActivite = () => {
  return (
    <section className="dropdown">
    <div className="dropdown-menu">
      <div className="dropdown-europe">
        <h4>Europe</h4>
        <ul>
          <li>Italie</li>
          <li>Grèce</li>
          <li>Espagne</li>

        </ul>
      </div>
      <div className="dropdown-asie">
        <h4>Asie</h4>
        <ul>
          <li>Japon</li>
          <li>Bali</li>
          <li>Thailande</li>
        </ul>
      </div>
      <div className="dropdown-amerique">
        <h4>Amérique</h4>
        <ul>
          <li> Costa Rica</li>
          <li>Méxique</li>
          <li>Nicaragua</li>
        </ul>
      </div>
      <div className="dropdown-afrique">
        <h4>Afrique</h4>
        <ul>
          <li>Namibie</li>
          <li>Ouganda</li>
          <li>Côte d’Ivoire</li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default DropdownActivite;