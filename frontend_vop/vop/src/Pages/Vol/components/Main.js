import React, { useState } from "react";
import Section from "./Section";
import "../Vol.css";
import italie1 from "../../../media/images/italie1.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import turquie1 from "../../../media/images/turquie1.jpg";
import japon1 from "../../../media/images/japon1.jpg";
import malaysia1 from "../../../media/images/malaysia1.jpg";






export default function Main (){
    
        const categories = [

            {
              id: "All",
              name: "Toutes nos destinations",
        
            },
            {
              id: "Europe",
              name: "Europe",
              description: "Contenu wall",
        
            },
            {
              id: "Asie",
              name: "Asie",
              description: "Contenu Gallery",
            },
            {
              id: "Amerique",
              name: "Amérique",
              description: "Video",
            },
            {
              id: "Afrique",
              name: "Afrique",
              description: " contenu Music",
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
                        image1={italie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={greece1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={finland1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }


                        {/*----section Asie----*/}
                        {category.id === "Asie"&& <Section
                        image1={turquie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={japon1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "Amerique" && <Section
                        image1={greece1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={greece1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                       
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "Afrique" && <Section
                        image1={greece1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                      </div>
                    )}
                   
                  </div>
                ))}
              </div>
            </div>
    );
}
