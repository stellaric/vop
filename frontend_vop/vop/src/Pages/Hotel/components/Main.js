import React, { useEffect, useState } from "react";
import Section from "./Section";
import "../Hotel.css";
import hotel_italie from "../../../media/img/vol_italie.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import turquie1 from "../../../media/images/turquie1.jpg";
import japon1 from "../../../media/images/japon1.jpg";
import malaysia1 from "../../../media/images/malaysia1.jpg";
import civoire from "../../../media/img/cote_ivoire.jpg"
import cameroun from "../../../media/img/cameroun.jpg"
import senegal1 from "../../../media/images/senegal1.jpg";
import newyork from "../../../media/img/ny.jpg"
import bhills from "../../../media/img/bhills.jpg"
import californie from "../../../media/img/californie.jpg"
import { getHotels } from "../../../services/voyage";


export default function Main (){
   {/* useEffect(()=>{
      function hotel(){
 const resultat = await getHotels()
      console.log(resultat)
      }
     
    },[])
*/}

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
                        image1={hotel_italie}
                        titre1="Italie"
                        description1="L'Italie est un pays riche en contrastes , de ses villes historiques à ses magnifiques côtes méditéranéennes."
                        compagnie1=""
                        prix1="240€/personne"
                        lien1="https://www.kombo.co/fr/app/round/1/1/202/2023-10-23/2023-10-27/Paris/Rome/inward/10yue0xyu0bw70s2ztjc0s2zz3c0010907r6/10xyu0yue0cul0s36sgo0s36yhc0010909wy/recap/passengers"
                       
                        image2={greece1}
                        titre2="Grece"
                        description2="La Grèce, berceau de la civilisation occidentale, où l'histoire antique s'anime parmi les ruines et les îles aux eaux cristallines"
                        compagnie2=""
                        prix2="450€"
                         lien2="https://www.kombo.co/fr/app/round/1/1/202/2023-10-23/2023-10-27/Paris/Rome/inward/10yue0xyu0bw70s2ztjc0s2zz3c0010907r6/10xyu0yue0cul0s36sgo0s36yhc0010909wy/recap/passengers"
                       
                        image3={finland1}
                        titre3="Finlande"
                        description3="La Finlande, pays des mille lacs et des aurores boréales, où la nature sauvage et la tranquillité règnent en maîtres "
                        compagnie3=""
                        prix3="620€"
                        lien3="https://www.kombo.co/fr/app/round/1/1/202/2023-10-23/2023-10-27/Paris/Rome/inward/10yue0xyu0bw70s2ztjc0s2zz3c0010907r6/10xyu0yue0cul0s36sgo0s36yhc0010909wy/recap/passengers"
                       
                        /> }


                        {/*----section Asie----*/}
                        {category.id === "Asie"&& <Section
                        image1={turquie1}
                        titre1="Thailande"
                        description1="La Thaïlande, où les temples scintillants, les plages de sable fin et la cuisine épicée enchantent tous les sens "
                        prix1="320€"
                        image2={japon1}
                        titre2="Japon"
                        description2="Le Japon, où la tradition ancestrale fusionne avec la modernité urbaine, créant un paysage culturel unique et captivant "
                        prix2="870€"
                        image3={malaysia1}
                        titre3="Malaisie"
                        description3="La Malaisie, où la culture fascinante, la cuisine exquise et la nature luxuriante se rencontrent dans une harmonie enchanteresse. "
                        prix3="950€"
                        /> }
                        

                        {/*----section Amérique---*/}
                        {category.id === "Amerique" && <Section
                        image1={newyork}
                        titre1="New York"
                        description1="New York, la ville qui mêle l'audace des gratte-ciel  à l'effervescence des quartiers uniques. Découvrez son horizon étincelant et son mélange incomparable de cultures. "
                        prix1="720€"
                        image2={bhills}
                        titre2="Berveley Hills"
                        description2="L'élégance et le glamour se rejoignent à Beverly Hills, où les boutiques de créateurs côtoient les villas somptueuses "
                        prix2="810€"
                        image3={californie}
                        titre3="Californie"
                        description3="La Californie, où les plages dorées rencontrent les montagnes majestueuses, offrant une diversité naturelle à couper le souffle. "
                        prix3="680€"
                        />}
                        {/*----section Afrique---*/}
                        {category.id === "Afrique" && <Section
                       image1={civoire}
                       titre1="Côte d'Ivoire"
                       description1="La Côte d'Ivoire, est une destination fascinante en Afrique de l'Ouest. Avec  nature étonnante, la Côte d'Ivoire offre une expérience de voyage inoubliable."
                       prix1="560€/personne"
                       compagnie1="20/10/23 - Aller Simple"
                      lien1="https://www.kombo.co/fr/app/outward/1/1/90117/2023-11-20/Paris/Abidjan/results"

                       image2={cameroun}
                        titre2="Cameroun"
                        description2="Le Cameroun, situé en Afrique centrale, séduit par sa diversité de paysages, des plages de sable fin aux montagnes majestueuses, en passant par une riche faune sauvage."
                        prix2="620€/personne"
                        compagnie2="Air France"
                        lien2="https://www.kombo.co/fr/app/outward/1/1/91724/2023-11-20/Paris/Yaound%C3%A9/results"

                        image3={senegal1}
                        titre3="Sénégal"
                        description3="Le Sénégal, situé en Afrique de l'Ouest, est une mosaïque culturelle offrant des plages ensoleillées, une histoire riche et une hospitalité légendaire. "
                        prix3="680€/personne"
                        compagnie3="Vueling"
                        lien3="https://www.kombo.co/fr/app/outward/1/1/90646/2023-11-20/Paris/Dakar/results"
                       />}
                       
                      </div>
                    )}
                   
                  </div>
                ))}
              </div>
            </div>
    );
}
