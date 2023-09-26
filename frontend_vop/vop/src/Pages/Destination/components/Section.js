import '../Destination.css';
import { Link } from "react-router-dom";
export default function Section(props){
    return(
        <>
        <section className="europe">
        <div className="card_destination">
          <div className="card_img">
            <img src={props.image1} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description1} </p>
          </div>
          <div className="card_footer_destination">
           <button><Link to={props.lien}>Voir plus</Link></button>
          </div>
        </div>

        <div className="card_destination">
          <div className="card_img">
          <img src={props.image2} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description2}</p>
          </div>
          <div className="card_footer_destination">
           <button><Link to={props.lien2}>Voir plus</Link></button>
          </div>
        </div>

        <div className="card_destination">
          <div className="card_img">
          <img src={props.image3} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description3} </p>
          </div>
          <div className="card_footer_destination">
           <button><Link to={props.lien3}>Voir plus</Link></button>
          </div>
        </div>
      </section>

        </>
    );


}