import '../Destination.css';

export default function Section(props){
    return(
        <>
        <section className="europe">
        <div className="card">
          <div className="card_img">
            <img src={props.image1} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description1} </p>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
          <img src={props.image2} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description2}</p>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
          <img src={props.image3} alt="" />
          </div>
          <div className="card_content">
            <p>{props.description3} </p>
          </div>
        </div>
      </section>

        </>
    );


}