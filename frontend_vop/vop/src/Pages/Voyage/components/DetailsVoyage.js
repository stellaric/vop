import "../Voyage.css";
import { Icon } from '@iconify/react';


export default function DetailsVoyage(props) {

    return (
        <div className={props.cName}>
            <div className="titres">
                <h2>{props.continent}</h2>
                <h3>{props.pays}</h3>

            </div>

            <div className="photos">
                <img
                    src={props.myImg1}
                    alt="image1"
                   
                />
                <div className="miniPhotos">
                <img
                    src={props.myImg2}
                    alt="image2"
                    style={{ maxWidth: '465px', height: '334px', marginRight: '10px' }}
                />
                <img
                    src={props.myImg3}
                    alt="image3"
                    style={{ maxWidth: '465px', height: '334px' }}
                />
                </div>
            </div>

           

            <div className="details">
                <div className="date"><Icon icon="uiw:date" color="#df921e" width="50"/> <p>{props.date}</p> </div>
                <div className="dep"><Icon icon="pepicons-pencil:airplane-circle-filled" color="#df921e" width="50" /><p>{props.depart}</p></div>
                <p>90€ / personne</p>

            </div>

            <div className="texte">
                <p>{props.paragraphe}</p>

            </div>
                <div className="reservaion">
                <form className="resa"> <p>Reservation</p></form>
                </div>
        </div>
    );
}