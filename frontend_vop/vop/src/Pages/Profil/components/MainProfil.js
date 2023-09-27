import React from "react";
import avatar from "../../../media/img1/avatar.png"
import { AiOutlineLogout } from "react-icons/ai";
import profil from "../../../media/img1/profil.jpg"
import Swal from 'sweetalert2'

export default function Main() {
    const handlereservation = () => {
        Swal.fire({
            title: 'souhaitez-vous supprimer?',
            showDenyButton: true,
            confirmButtonText: 'oui',
            denyButtonText: `non`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Supprimé!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('reservation pas supprimer', '', 'info')
            }
        })
    }
    return (
        <div className="moncontainer">
            <div className="container_profil">
                <div className="image">
                    <img src={avatar} alt="Avatar femme" />
                </div>
                <div className="bloc_infopersonne">
                    <h2>Nom</h2>
                    <p>Prénom</p>
                    <p>Réservation</p>
                    <p><span className="styliseicon"><AiOutlineLogout /></span>Connexion</p>
                </div>
            </div>
            <div className="container_bloc_droit">
                <h1>Reservations</h1>
                <div className="mycard">
                    <div className="imagemer">
                        <img src={profil} alt="mer" />
                    </div>
                    <button className="cancel-btn" onClick={handlereservation}>
                        annuler la reservation
                    </button>

                </div>
            </div>


        </div>
    );
}
