import '../custom.css';
import logo from '../assets/images/icon.svg';
import LoginForm from '../components/forms/user/loginForm';

function Login() {
  return (
    <main className='container-fluid' id='main_login'>
      <div className='container d-flex flex-column justify-content-center'>
        <img src={logo} className="landingPage-logo" alt="logo" />
        <h1 className="h3 mb-3 fw-normal">Veuillez vous connecter</h1>
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default Login;