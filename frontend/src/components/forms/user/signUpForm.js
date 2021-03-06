import { FaCheck } from 'react-icons/fa';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useNavigate} from 'react-router-dom';
 
function SignUpForm() {

  const { register, formState: { errors }, handleSubmit } = useForm();


  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post(process.env.REACT_APP_API + '/api/auth/signup', data)
      .then((result) => {
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
     })
     .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='container py-4 col-lg-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='text-start signup-form'>
        <div className='mb-3'>
          <label htmlFor='InputFirstName' className='form-label d-flex'>
            <p className=' form-required'>Prénom</p>
            <p className='ps-1 form-required red-required'>*</p>
          </label>
          <input {...register('firstName', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} type='text' className='form-control bg-light' id='FirstName'/>
          {errors.firstName && <p className='color-alert'>Le prénom est requis!</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='InputLastName1' className='form-label d-flex'>
            <p className=' form-required'>Nom</p>
            <p className='ps-1 form-required red-required'>*</p>
          </label>
          <input {...register('lastName', { required: true, maxLength: 20, patttern: /^[A-Za-z]+$/i })} type='text' className='form-control bg-light' id='InputLastName'/>
          {errors.lastName && <p className='color-alert'>Le nom de famille est requis!</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='InputAge1' className='form-label'>Age</label>
          <input {...register('age')} type='text' className='form-control bg-light' id='InputAge1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputOcupation1' className='form-label'>Ocupation</label>
          <input {...register('profession')} type='text' className='form-control bg-light' id='InputOcupation1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputBio1' className='form-label'>Bio</label>
          <textarea {...register('bio')} className='form-control bg-light' id='InputBio1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputEmail1' className='form-label d-flex'>
            <p className=' form-required'>E-mail</p>
            <p className='ps-1 form-required red-required'>*</p> 
          </label>
          <input {...register('email', { required: true })} type='email' className='form-control bg-light' id='InputEmail1'/>
          {errors.email && <p className='color-alert'>L'e-mail est requis </p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='InputPassword1' className='form-label d-flex'>
            <p className=' form-required'>Password</p>
            <p className='ps-1 form-required red-required'>*</p>
          </label>
          <input {...register('password', { required: true, minLength: 6 })} type='Password' className='form-control bg-light' id='InputPassword1'/>
          {errors.password && <p className='color-alert'>Le mot de passe est requis et doit être au moins composé de 6 chiffres !</p>}
        </div>
        <div className='d-flex required-info'>
          <p className='ps-1 form-required red-required'>*</p>
          <p className='ps-1'>Doit être obligatoirement rempli</p>
        </div>

        <div className='d-flex justify-content-center'>
          <button type='submit' value='Submit' className='btn d-flex' id='btn-singup-submit'>
            <FaCheck />
            <p>Enregistrer</p>
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default SignUpForm;