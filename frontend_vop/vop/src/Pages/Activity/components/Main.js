import React from "react";
import "../Activity.css";
import active2 from "../../../media/img1/active2.jpg"
import active3 from "../../../media/img1/active3.jpg"
import active4 from "../../../media/img1/active4.jpg"



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
                    </div>
                      {/* card2 */}
                </div>
                <div className="card_activite">
                    <img src={active3} alt="bateau" />
                    <div class="card__infos">
                        <p class="card__title">Bateau</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    {/* card3 */}
                </div>
                <div className="card_activite">
                    <img src={active4} alt="voile" />
                    <div class="card__infos">
                        <p class="card__title">Voile</p>
                        <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}