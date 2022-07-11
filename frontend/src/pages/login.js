// Styles
import '../custom.css';

// Assets
import logo from '../assets/images/icon-above-font.svg';

// Components
import LoginForm from '../components/forms/user/loginForm';
import LoginFooter from '../components/layout/login_footer';


function Login() {
  return (
    <div className='page_wrapper'>
      <main className='container-fluid' id='main_login'>
        <div className='container d-flex flex-column justify-content-center'>
          <div className='container' id='banner_login'>
            <img src={logo} className="landingPage-logo" alt="logo" />
            <h1 className="h3 mb-3 fw-normal">Veuillez vous connecter</h1>
          </div>
            <LoginForm />
        </div>
      </main>
      <LoginFooter />
    </div>
  );
}

export default Login;