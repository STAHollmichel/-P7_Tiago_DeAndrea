import { FaRegImage } from 'react-icons/fa';

import React from 'react';

const FileUploaderBtn = props => {

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

return (
    <>
      <button type="button" onClick={handleClick} className='btn ps-2 d-flex' id='btn-photo-upload' >
        <FaRegImage />
        <p>Ajouter médias</p>
      </button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
    </>
  );
} 

export default FileUploaderBtn;