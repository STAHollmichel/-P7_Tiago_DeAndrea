import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink} from "react-router-dom";


function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post(process.env.REACT_APP_API + '/api/auth/login', {
                email: data.email,
                password: data.password,
            })
            .then((result) => {
                localStorage.token = result.data.token;
                axios.defaults.headers.common.Authorization = 'Bearer ' + result.data.token;
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='form-signin'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-floating' >
                    <label htmlFor="floatingInput" className="form-label">Adresse e-mail</label>
                    <input {...register('email', { required: true })} type="email" className="form-control" id="floatingInput" placeholder="nom@example.fr"/>
                    { errors.email && <p className='pb-3'>L'e-mail est requis !</p> }
                </div>
                <div className='form-floating'>
                    <label htmlFor="floatingPassword" className="form-label">Mot de passe</label>
                    <input {...register('password', { required: true, minLength: 4 })} type="password" className="form-control bg-light" id="floatingPassword" placeholder="Mot de passe"/>
                    { errors.password && <p>Le mot de passe est requis !</p> }
                </div>
                <div>
                    <button type="submit" value="Submit" className='w-100 btn btn-lg mt-3' id='btn-login'>Se connecter</button>
                    <div className='container my-3' id='login_reg_seperator'>
                         <span id='login_reg_bars'>Ou</span>
                    </div>
                    <NavLink to='/signup'>
                        <button className='w-100 btn btn-lg' id='btn-signup'>S'inscrire</button>
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;