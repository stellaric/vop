import '../Vol.css';

export default function Section(props){
    return(
        <>
        <section className="container">
        <div className="card">
          <div className="card_img">
            <img src={props.image1} alt="" />
          </div>
          <div className="card_contenu">
            <p>{props.description1} </p>
          </div>
          <div className="card_footer">
           <button>test</button>
          </div>
        </div>


        <div className="card">
          <div className="card_img">
          <img src={props.image2} alt="" />
          </div>
          <div className="card_contenu">
            <p>{props.description2}</p>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
          <img src={props.image3} alt="" />
          </div>
          <div className="card_contenu">
            <p>{props.description3} </p>
          </div>
        </div>
      </section>

        </>
    );


}