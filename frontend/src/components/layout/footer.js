import '../../custom.css';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='container-fluid text-center' id='home_footer'>
             <section className='text-center fs-3 py-4 bg-dark' id='social-icons'>
                    <a className='m-2' href='#!' role='button'>
                        <FaFacebook />
                    </a>
                    <a className='m-2' href='#!' role='button'>
                        <FaTwitter />    
                    </a>
                    <a className='m-2' href='#!' role='button'>
                        <FaGoogle />
                    </a>
                    <a className='m-2' href='#!' role='button'>
                        <FaInstagram />
                    </a>
                    <a className='m-2' href='#!' role='button'>
                        <FaLinkedin />
                    </a>
                </section>
                <section className='text-center'>
                    <ul className='nav justify-content-center py-3' id='footer-links'>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Mentions légales</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Données personnelles</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Plan du site</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Contact</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Crédits</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Accessibilité</a></li>
                    </ul>
                    <div className='text-center'>
                        <p className='text-light py-3'>© Groupomania 2022</p>
                    </div>
                </section>
        </footer>
    );
}

export default Footer;
