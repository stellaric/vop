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
                    style={{ maxWidth: '765px', height: '634px', marginRight: '10px' }}
                />
                <div className="miniPhotos">
                <img
                    src={props.myImg2}
                    alt="image2"
                    style={{ maxWidth: '565px', height: '434px', marginRight: '10px' }}
                />
                <img
                    src={props.myImg3}
                    alt="image3"
                    style={{ maxWidth: '565px', height: '434px' }}
                />
                </div>
            </div>

           

            <div className="details">
                <div className="date"><Icon icon="uiw:date" color="#df921e" width="50"/> <p>{props.date}</p> </div>
                <div className="dep"><Icon icon="pepicons-pencil:airplane-circle-filled" color="#df921e" width="50" /><p>{props.départ}</p></div>
                <p>90€ / personne</p>

            </div>

            <div className="texte">
                <p>{props.paragraphe}</p>

            </div>

                <form className="resa"> <p>Reservation</p></form>

        </div>
    );
}