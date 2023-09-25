import '../App.css';
import { Icon } from '@iconify/react';
import QRcode from '../media/images/QRcode.png';
import logo from '../media/images/logo.png';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="footer">
            <div className="element_footer">

                <div className='elem1'>
                    <img src={logo} alt="Example" />
                    <p>Moyen de paiement</p>
                    <div className='icon'>
                        <Icon icon="circum:credit-card-1" color="white" width="60" height="60" />
                        <Icon icon="teenyicons:paypal-solid" color="white" width="50" height="50" />
                    </div>
                </div>

                <div className='elem2'>
                    <p>Nos réseaux sociaux </p>
                    <div className='icon'>
                        <Icon icon="la:facebook" color="white"  />
                        <Icon icon="bi:instagram" color="white"  />
                        <Icon icon="ph:tiktok-logo-thin" color="white" />
                        <Icon icon="uit:twitter-alt" color="white"  />
                    </div>
                    <p>ou</p>
                    <form className='button_contact'> <Link to={"/contact"}> Nous contacter</Link></form>
                   
                    
                </div>
                <div className='elem3'>
                    <p>Newsletter</p>
                    <img src={QRcode} alt="Example" />
                    <input type="text" placeholder="Entrez votre email..." name="mail" required></input>
                    <button className='button_news' type="submit">Validez</button>

                </div>

            </div>

        </div>

    );

}
