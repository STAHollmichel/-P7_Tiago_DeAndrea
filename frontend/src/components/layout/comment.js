import "../../custom.css";

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";

function CommentDisplay(props) {

  const [comments, setComments] = useState([]);
  console.log(comments);

  const params = useParams();

  const deleteComment = (commentId) => {
    axios.delete("http://localhost:3002/api/comments/" + commentId)
    .then((result) => {
        alert("Comment Suprimé");
        window.location.reload();
    }) 
}

  useEffect(() => {
    
    axios
      .get("http://localhost:3002/api/comments/" + props.postId)
      .then((comments) => {
        setComments(comments.data.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      {comments.length
        ? comments.map((comment) => (
            <section className='card mb-3'>
              <article className='p-2'>
                <div className='container' id='comment-card'>
                  <div className='d-flex' id='comment-user-icon'>
                    <FaUserAlt />
                    <h2 className='pt-2 ps-3'>{comment.User.firstName} {comment.User.lastName}</h2>
                  </div>
                  <p className='card-text ps-3 p-2 text-black bg-light rounded-pill'>{comment.commentDescription}</p>
                </div>
                <div className='d-flex justify-content-end'>
                  <button onClick={() => deleteComment(comment.id)} className='btn m-2 pe-3 d-flex' id='btn-comment-delete'>
                    <FaTrashAlt />
                    <p className='ps-4'>Effacer</p>
                  </button>
                </div>
              </article>
            </section>
          ))
        : null}
  </div>
);
}

export default CommentDisplay;