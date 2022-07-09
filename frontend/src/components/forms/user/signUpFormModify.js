import axios from 'axios';
import { useForm } from 'react-hook-form';
 
function SignUpFormModify(props) {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => { 
      window.alert("Profile modifié!");
      console.log(data);
      axios
          .put("http://localhost:3002/api/auth/" + props.auth, data)
          .then(
              (result) => {
              window.location.reload();
           })
          .catch((err) => console.log(err));
  }

  if (props.modify) {

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='text-start signup-form'>
        <div className='mb-3'>
          <label htmlFor='InputFirstName' className='form-label'>Prénom</label>
          <input {...register('firstName')} type='text' className='form-control bg-light' id='FirstName'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputLastName1' className='form-label'>Nom</label>
          <input {...register('lastName')} type='text' className='form-control bg-light' id='InputLastName'/>
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
          <label htmlFor='InputEmail1' className='form-label'>E-mail</label>
          <input {...register('email')} type='email' className='form-control bg-light' id='InputEmail1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputPassword1' className='form-label'>Password</label>
          <input {...register('password')} type='Password' className='form-control bg-light' id='InputPassword1'/>
        </div>
        <button type='submit' value='Submit' className='btn btn-primary'>
          <p>Modifier</p>
        </button>
      </form>
    );
  }
  return null;
}
export default SignUpFormModify;