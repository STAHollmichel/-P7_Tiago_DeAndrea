import '../../custom.css';

import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

function LoginFooter() {
    return (
        <footer className='container-fluid' id='login_footer'>
                <section className='text-center fs-3 py-4 mb-4'>
                    <div className='pb-3'>
                        <a className=' m-2' href='#!' role='button'>
                            <FaFacebook />
                        </a>
                        <a className=' m-2' href='#!' role='button'>
                            <FaTwitter />    
                        </a>
                        <a className=' m-2' href='#!' role='button'>
                            <FaGoogle />
                        </a>
                        <a className=' m-2' href='#!' role='button'>
                            <FaInstagram />
                        </a>
                        <a className=' m-2' href='#!' role='button'>
                            <FaLinkedin />
                        </a>
                    </div>
                </section>
                <section>
                    <ul>
                        <li className='p-3'><a href="#">Mentions légales</a></li>
                        <li className='p-3 li-bdl-ct'><a href="#">Données personnelles</a></li>
                        <li className='p-3 li-bdl-ct'><a href="#">Plan du site</a></li>
                        <li className='p-3 li-bdl-ct'><a href="#">Contact</a></li>
                        <li className='p-3 li-bdl-ct'><a href="#">Crédits</a></li>
                        <li className='p-3 li-bdl-ct'><a href="#">Accessibilité</a></li>
                    </ul>
                
                    <div className='text-center'>
                        <p className='text-muted'>© Groupomania 2022</p>
                    </div>
                </section>
        </footer>
    );
}

export default LoginFooter;