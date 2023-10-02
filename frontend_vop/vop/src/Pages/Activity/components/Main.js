import React from "react";
import "../Activity.css";
import active2 from "../../../media/img1/active2.jpg"
import active3 from "../../../media/img1/active3.jpg"
import active4 from "../../../media/img1/active4.jpg"


import bali from "../../../media/img1/bali.jpg"
import benin from "../../../media/img1/benin.jpg"
import cameroun from "../../../media/img1/cameroun.webp"

import italie from "../../../media/img1/italie.jpg"
import japon from "../../../media/img1/japon.jpg"
import mexique from "../../../media/img1/mexique.jpg"






export default function Main() {
    // card
    return (
        
        <main className="text">
       
            <section className="activity_accueil">
               
                <div className="card_activite">
                    <img src={active2} alt="Canoë" />
                     {/* card1 */}
                    <div class="card__infos">
                        <p class="card__title">Canoë</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>50€</p>
                    </div>
            
                      {/* card2 */}
                </div>
                <div className="card_activite">
                    <img src={active3} alt="bateau" />
                    <div class="card__infos">
                        <p class="card__title">Bateau</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>100€</p>
                    </div>
                    {/* card3 */}
                </div>
                <div className="card_activite">
                    <img src={active4} alt="voile" />
                    <div class="card__infos">
                        <p class="card__title">Voile</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>110€</p>
                    </div>
                </div>
            </section>


            <section className="activity_accueil">
                <div className="card_activite">
                    <img src={bali} alt="Montgolfiere" />
                    
                     {/* card1 */}
                    <div class="card__infos">
                        <p class="card__title">Montgolfière</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>30€</p>
                    </div>
                      {/* card2 */}
                </div>
                <div className="card_activite">
                    <img src={benin} alt="bateau" />
                    <div class="card__infos">
                        <p class="card__title">Boite de nuit</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>45€</p>
                    </div>
                    {/* card3 */}
                </div>
                <div className="card_activite">
                    <img src={cameroun} alt="voile" />
                    <div class="card__infos">
                        <p class="card__title">Hélicoptère</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>200€</p>
                    </div>
                </div>
            </section>
            
            

            <section className="activity_accueil">
                <div className="card_activite">
                    <img src={italie} alt="Canoë" />
                     {/* card1 */}
                    <div class="card__infos">
                        <p class="card__title">Gondole</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>42€</p>
                    </div>
                      {/* card2 */}
                </div>
                <div className="card_activite">
                    <img src={japon} alt="bateau" />
                    <div class="card__infos">
                        <p class="card__title">Nature</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>25€</p>
                    </div>
                    {/* card3 */}
                </div>
                <div className="card_activite">
                    <img src={mexique} alt="voile" />
                    <div class="card__infos">
                        <p class="card__title">Voile</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>80€</p>
                    </div>
                </div>
            </section>
            
        </main>
    );
}