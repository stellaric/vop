import "../../Contact/contact.css"
import React, { useState } from "react";

export default function Main() {
    return (
        <div className="main">

            <div className="section_contact">
                <form name="contact" method="post" className="contact_form" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact" />

                    <label for="email">Email: </label>
                    <input type="email" name="email" placeholder="Entrez votre email..." />

                    <label for="sujet">Sujet: </label>
                    <textarea name="sujet" placeholder="Sujet de votre message..."></textarea>


                    <label for="message" >Message: </label>
                    <textarea style={{ height: "150px" }} name="message" placeholder="Entrez votre message..."></textarea>



                    <button type="submit">Validez</button>

                </form>
            </div>





            <container className="adresse">
                <div className="content_adresse">
                    <div className="section map"></div>
                    <div className="coordonnée">
                        <h2>Nos coordonnées</h2>
                        <p>ceci est un  paragrahcekdodozdokzdozodz ceci est un  paragrahcekdodozdokzdozodz </p>

                    </div>
                </div>

            </container>

        </div>

    );

}