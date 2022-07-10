import '../custom.css';
import logoIcon from '../assets/images/icon.svg';

import SignUpForm from '../components/forms/user/signUpForm';
import LoginFooter from '../components/layout/login_footer';

function Signup() {
    return(
        <div className='page_wrapper'>
            <main className='bg-light' id='main_signup'> 
                <div className='container-sm py-4 col-9'>
                    <section className='card py-3 border shadow' id='signup-card'>
                        <div className='card-body'>
                            <img src={logoIcon}  alt='Groupomania signup logo' id='signup-logo' />
                            <h1>Bienvenue! Inscrivez-vouz chez Groupomania</h1>
                            <SignUpForm />
                        </div>
                    </section>
                </div>
            </main>
            <LoginFooter />
        </div >
    );
}

export default Signup;