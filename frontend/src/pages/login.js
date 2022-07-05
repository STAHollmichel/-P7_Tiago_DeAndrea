import logo from '../assets/images/icon.svg';
import '../App.css';
import LoginForm from '../components/forms/user/loginForm';

function Login() {
  return (
    <main className='container-fluid'>
      <div>
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