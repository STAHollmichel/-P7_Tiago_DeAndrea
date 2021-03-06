import { FaRegPaperPlane } from 'react-icons/fa';


import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import FileUploaderBtn from '../../buttons/fileUploaderBtn';

function PostForm() {
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    window.alert('Publication ajoutée!');
    console.log(data);

    const formdata = new FormData();
    formdata.append('postDescription', data.postDescription);
    formdata.append('image', file);

    axios
      .post(process.env.REACT_APP_API + '/api/posts/', formdata)
      .then((result) => {
        window.location.reload();
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const handleFile = (file) => {
    setFile(file);
  };

  return (
    <div className="container col-lg-4 py-4">
      <div className="card p-3 border shadow-sm">
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <textarea
                {...register('postDescription')}
                placeholder="Que voulais-vous dire?"
                className="form-control bg-light ps-4 rounded-pill"
                id="InputPost1"
              />
            </div>
            <div className="border-top">
              <div className='d-flex justify-content-evenly pt-2'>
                <FileUploaderBtn handleFile={handleFile} />
                  <button type="submit" value="Submit" className="btn d-flex " id='btn-publish'>
                    <FaRegPaperPlane />
                    <p>Publier</p>
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;