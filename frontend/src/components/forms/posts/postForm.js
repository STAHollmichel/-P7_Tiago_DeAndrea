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
      .post('http://localhost:3002/api/posts/', formdata)
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
                class="form-control bg-light pb-0 rounded-pill"
                id="InputPost1"
              />
            </div>
            <div className="border-top d-flex justify-content-evenly">
              <FileUploaderBtn handleFile={handleFile} />
              <button type="submit" value="Submit" className="btn d-flex " id='btn-publish'>
                <FaRegPaperPlane />
                <p>Publier</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;