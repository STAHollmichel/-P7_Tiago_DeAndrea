import '../custom.css';
import SignUpForm from '../components/forms/user/signUpForm';

function Signup() {
    return(
        <main className='bg-light' id='main_signup'> 
            <div className='container-sm col-9'>
                <section className='card py-3 mt-3 border shadow' id='signup-card'>
                    <div className='card-body'>
                        <h1>Bienvenue! Inscrivez-vouz chez Groupo Mania</h1>
                        <SignUpForm />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Signup;