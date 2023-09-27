import React, { useState } from "react";
import Section from "./Section";
import "../Destination.css";
import italie1 from "../../../media/images/italie1.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import turquie1 from "../../../media/images/turquie1.jpg";
import japon1 from "../../../media/images/japon1.jpg";
import malaysia1 from "../../../media/images/malaysia1.jpg";
import colombia1 from "../../../media/images/colombia1.jpg";
import cuba2 from "../../../media/images/cuba2.jpg";
import mexico1 from "../../../media/images/mexico1.jpg";
import senegal1 from "../../../media/images/senegal1.jpg";
import cap1 from "../../../media/images/cap1.jpg";
import alg1 from "../../../media/images/alg1.jpg";











export default function MainDestination (){
    
        const categories = [

            {
              id: "All",
              name: "Toutes nos destinations",
        
            },
            {
              id: "europe",
              name: "Europe",
              description: "Contenu wall",
        
            },
            {
              id: "asie",
              name: "Asie",
              description: "Contenu asie",
            },
            {
              id: "amerique",
              name: "Amérique",
              description: "amerique",
            },
            {
              id: "afrique",
              name: "Afrique",
              description: " contenu afrique",
            },
          ];
        
          const [activeTab, setActiveTab] = useState(categories[0].id);
        
          const handleTabClick = (categoryId) => {
            setActiveTab(categoryId);
          };
        
          
        
          return (
            <div className="mainTab">
              <div className="tab">
                {categories.map((category) => (
                  
                <button
                    key={category.id}
                    className={`tablinks ${
                      activeTab === "All" || activeTab === category.id ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="tabcontent-container">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className={`tabcontent ${
                      activeTab === "All" || activeTab === category.id ? "active" : ""
                    }`}
                  >
                    <h3>{category.name}</h3>
                    {activeTab === "All" && (
                      <div> {/*----section Europe----*/}
                        {category.id === "europe" && <Section
                        image1={italie1}
                        card_titre1="Italie"
                        description1="L'Italie constitue sans l'ombre d'un doute l'une des destinations les plus célèbres et appréciées du monde entier. La célèbre botte d'Europe du Sud abrite en effet d'incroyables trésors.  "
                        lien="/voyage?cName=italie"
                        image2={greece1}
                        card_titre2="Grece"
                        description2="Destination phare de la Méditerranée, la Grèce se démarque par une histoire riche et complexe, des paysages côtiers à couper le souffle et une culture singulière.   "
                        lien2="/voyage?cName=grece"
                        image3={finland1}
                        card_titre3="Finland"
                        description3="Située entre mer Adriatique et montagne, la Finlande se veut une destination nature par excellence. Les sommets enneigés promettent sports de glisse et le plein de sensations.  "
                        lien3="/voyage?cName=finland"
                        /> }
                        {/*----section Asie----*/}
                        {category.id === "asie"&& <Section
                        image1={turquie1}
                        card_titre1="Turquie"
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={japon1}
                        card_titre2="Japon"
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        card_titre3="Malaysia"
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "amerique" && <Section
                        image1={colombia1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={cuba2}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={mexico1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "afrique" && <Section
                        image1={senegal1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={cap1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={alg1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                      </div>
                    )}
                    {activeTab === category.id && (
                      <div>
                        {category.id === "europe" && <Section
                        image1={italie1}
                        card_titre1="Italie"
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={greece1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={finland1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        {/*----section Asie----*/}
                        {category.id === "asie"&& <Section
                        image1={turquie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={japon1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        
                        {/*----section Amérique---*/}
                        {category.id === "amerique" && <Section
                        image1={colombia1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={cuba2}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={mexico1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "afrique" && <Section
                        image1={senegal1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={cap1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={alg1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                        
                      </div>
                    )}
                  </div>
                ))}
                
              </div>
            </div>
    );
}
