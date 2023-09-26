import React, { useState } from "react";
import Section from "./Section";
import "../Vol.css";
import vol_italie from "../../../media/img/vol_italie.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import turquie1 from "../../../media/images/turquie1.jpg";
import japon1 from "../../../media/images/japon1.jpg";
import malaysia1 from "../../../media/images/malaysia1.jpg";

import senegal1 from "../../../media/images/senegal1.jpg";





export default function Main (){
    
        const categories = [

            {
              id: "All",
              name: "Toutes nos destinations",
        
            },
            {
              id: "Europe",
              name: "Europe",
              description: "Contenu Europe",
        
            },
            {
              id: "Asie",
              name: "Asie",
              description: "Contenu Asie",
            },
            {
              id: "Amerique",
              name: "Amérique",
              description: "Contenu Amerique",
            },
            {
              id: "Afrique",
              name: "Afrique",
              description: " Contenu Afrique",
            },
          ];
        
          const [activeTab, setActiveTab] = useState(categories[0].id);
        
          const handleTabClick = (categoryId) => {
            setActiveTab(categoryId);
          };
        
          
        
          return (
            <div className="main_vol">
              
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
                    <h2>{category.name}</h2>
                    
                    {(activeTab === "All" || activeTab === category.id) && (
                      <div> {/*----section Europe----*/}
                        {category.id === "Europe" && <Section
                        image1={vol_italie}
                        titre1="Venise"
                        description1="L'Italie est un pays riche en contrastes , de ses villes historiques à ses magnifiques côtes méditéranéennes."
                        compagnie1=""
                        prix1="240€/personne"
                        lien1="https://www.kombo.co/fr/app/round/1/1/202/2023-10-23/2023-10-27/Paris/Rome/inward/10yue0xyu0bw70s2ztjc0s2zz3c0010907r6/10xyu0yue0cul0s36sgo0s36yhc0010909wy/recap/passengers"
                       
                        image2={greece1}
                        titre2="Grece"
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        compagnie2=""
                        prix2="450€"
                         lien2="https://www.kombo.co/fr/app/round/1/1/202/2023-10-23/2023-10-27/Paris/Rome/inward/10yue0xyu0bw70s2ztjc0s2zz3c0010907r6/10xyu0yue0cul0s36sgo0s36yhc0010909wy/recap/passengers"
                       
                        image3={finland1}
                        titre3="Finlande"
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        compagnie3=""
                        prix3="620€"
                        /> }


                        {/*----section Asie----*/}
                        {category.id === "Asie"&& <Section
                        image1={turquie1}
                        titre1="Turquie"
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix1="320€"
                        image2={japon1}
                        titre2="Japon"
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix2="870€"
                        image3={malaysia1}
                        titre3="Malaisie"
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix3="950€"
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "Amerique" && <Section
                        image1={greece1}
                        titre1="New York"
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix1="720€"
                        image2={greece1}
                        titre2="Berveley Hills"
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix2="810€"
                        image3={malaysia1}
                        titre3="Californie"
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix3="680€"
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "Afrique" && <Section
                       image1={greece1}
                       titre1="Côte d'Ivoire"
                       description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                       prix1="560€"
                       image2={greece1}
                        titre2="Cameroun"
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix2="620€"
                        image3={senegal1}
                        titre3="Sénégal"
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        prix3="680€"
                       />}
                       
                      </div>
                    )}
                   
                  </div>
                ))}
              </div>
            </div>
    );
}
