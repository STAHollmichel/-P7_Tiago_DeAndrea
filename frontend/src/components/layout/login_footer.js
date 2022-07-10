import '../../custom.css';

import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

function LoginFooter() {
    return (
        <footer className='container-fluid bg-light' id='login_footer'>
                <section className='text-center fs-3 py-4'>
                    <div className='pb-3'>
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
                    </div>
                </section>
                <section className='text-center'>
                    <ul className='nav justify-content-center py-3'>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Mentions légales</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Données personnelles</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Plan du site</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Contact</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Crédits</a></li>
                        <li className='nav-item ps-3'><a href='#!' role='button'>Accessibilité</a></li>
                    </ul>
                    <div className='text-center'>
                        <p className='text-muted py-3'>© Groupomania 2022</p>
                    </div>
                </section>
        </footer>
    );
}

export default LoginFooter;