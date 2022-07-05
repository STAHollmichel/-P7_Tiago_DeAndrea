import '../custom.css';
import SignUpForm from '../components/forms/user/signUpForm';

function Signup() {
    return(
        <main className='container-fluid' id='main_signup'> 
            <div className='container-sm col-9'>
                <h1>Bienvenue! Inscrivez-vouz chez Groupo Mania</h1>
                <SignUpForm />
            </div>
        </main>
    );
}

export default Signup;