import React, { useState } from "react";
import Section from "./Section";
import "../Destination.css";
import italie1 from "../../../media/images/italie1.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import turquie1 from "../../../media/images/turquie1.jpg";
import japon1 from "../../../media/images/japon1.jpg";
import malaysia1 from "../../../media/images/malaysia1.jpg";






export default function MainDestination (){
    
        const categories = [

            {
              id: "All",
              name: "Toutes nos destinations",
        
            },
            {
              id: "Wall",
              name: "Europe",
              description: "Contenu wall",
        
            },
            {
              id: "Gallery",
              name: "Asie",
              description: "Contenu Gallery",
            },
            {
              id: "Video",
              name: "Amérique",
              description: "Video",
            },
            {
              id: "Music",
              name: "Afrique",
              description: " contenu Music",
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
                        {category.id === "Wall" && <Section
                        image1={italie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={greece1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={finland1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        {/*----section Asie----*/}
                        {category.id === "Gallery"&& <Section
                        image1={turquie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={japon1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "Video" && <Section
                        image1={greece1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "Music" && <Section
                        image1={greece1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                      </div>
                    )}
                    {activeTab === category.id && (
                      <div>
                        {category.id === "Wall" && <Section
                        image1={italie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={greece1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={finland1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        {/*----section Asie----*/}
                        {category.id === "Gallery"&& <Section
                        image1={turquie1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image2={japon1}
                        description2="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        image3={malaysia1}
                        description3="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "Video" && <Section
                        image1={greece1}
                        description1="ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz "
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "Music" && <Section
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
