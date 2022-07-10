import { FaRegPaperPlane } from 'react-icons/fa';

import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import FileUploaderBtn from '../../buttons/fileUploaderBtn';

function ModifyPost(props) {
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState(null);

  const handleFile = (file) => {
    setFile(file);
  };

  const onSubmit = (data) => {
    window.alert('Publication modifié!');
    console.log(data);
    const formdata = new FormData();
    formdata.append('postDescription', data.postDescription);
    formdata.append('image', file);

    axios
      .put(process.env.REACT_APP_API + '/api/posts/' + props.id, formdata)
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <textarea
            {...register('postDescription')}
            className="form-control"
            id="InputPost1"
            placeholder='Que voulez-vous éditer ?'
          />
        </div>
        <div className='container pb-2 border-top d-flex justify-content-evenly'>
          <FileUploaderBtn handleFile={handleFile} />
          <button type="submit" value="Submit" className="btn d-flex" id='btn-publish-modified-post'>
            <FaRegPaperPlane />
            <p>Publier</p>
          </button>
        </div>

      </form>
    </div>
  );
}

export default ModifyPost;