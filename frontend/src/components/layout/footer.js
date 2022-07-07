import '../../custom.css';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='container-fluid bg-tertiary text-center' id='home_footer'>
             <section className=" text-center fs-3 pt-4 mb-4 bg-dark">
                    <a className=" m-2" href="#!" role="button">
                        <FaFacebook />
                    </a>
                    <a className=" m-2" href="#!" role="button">
                        <FaTwitter />    
                    </a>
                    <a className=" m-2" href="#!" role="button">
                        <FaGoogle />
                    </a>
                    <a className=" m-2" href="#!" role="button">
                        <FaInstagram />
                    </a>
                    <a className=" m-2" href="#!" role="button">
                        <FaLinkedin />
                    </a>
                </section>
                <section className='text-center'>
                    <ul className='d-flex flex-sm-row'>
                        <li className='px-3'><a href="#">Mentions légales</a></li>
                        <li className='px-3 li-bdl-cs'><a href="#">Données personnelles</a></li>
                        <li className='px-3 li-bdl-cs'><a href="#">Plan du site</a></li>
                        <li className='px-3 li-bdl-cs'><a href="#">Contact</a></li>
                        <li className='px-3 li-bdl-cs'><a href="#">Crédits</a></li>
                        <li className='px-3 li-bdl-cs'><a href="#">Accessibilité</a></li>
                    </ul>
                
                    <div className='text-center'>
                        <p className='text-light'>© Groupomania 2022</p>
                    </div>
                </section>
        </footer>
    );
}

export default Footer;
