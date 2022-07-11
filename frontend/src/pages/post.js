import { FaEllipsisH, FaRegCommentDots, FaRegEdit, FaRegWindowClose, FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import "bootstrap/js/src/collapse.js";
import PulseLoader from "react-spinners/PulseLoader";

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';

import PostFormModify from '../components/forms/posts/postFormModify';
import CommentDisplay from '../components/layout/comment';
import CommentForm from '../components/forms/comments/commentForm';




const SinglePost = () => {
  
  const params = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState();
  const [user, setUser] = useState();

  const [commentForm, setCommentForm] = useState(false);

  const toggleCommentForm = () => {

      setCommentForm (!commentForm);

  }

  const [togglePopup, setTogglepopup] = useState(false);


  const openPopupPostEdit = () => {
    setTogglepopup(!togglePopup);
  };

  useEffect(() => {
    axios.get(process.env.REACT_APP_API + '/api/posts/' + params.id)
    .then((result) => {
      setPost(result.data);
    });
    axios.get(process.env.REACT_APP_API + '/api/auth')
    .then(({ data }) => {
      setUser(data.user);
    });
  }, [params.id]);

  const deletePost = () => {
    axios
      .delete(process.env.REACT_APP_API + '/api/posts/' + params.id)
      .then((result) => {
        alert('Post Suprimé!');
        navigate('/');
      });
  };

 
  

  if (post) {
    return (
      <div className="page__wrapper">
        <Nav />
        <main className="container-fluid bg-light" id="main-post">
          <div className="container pb-4 pt-3 col-lg-4">
            <section className="card border shadow-sm">
              <article className='card__body p-3'>
                <div className='container border-bottom d-flex justify-content-between'>
                  <div className='d-flex' id='post-user-icon'>
                      <FaUserAlt />
                      <h1 className='pt-2 ps-3'>{post.User.firstName} {post.User.lastName}</h1>
                  </div>
                </div>
                <div>
                  <p className='p-3'>{post.postDescription}</p>
                </div>
              </article>
              {post.postPhoto ? (
                <picture className='d-flex justify-content-center'>
                 <img src={post.postPhoto} 
                    className="card-img-fluid border-top border-bottom" alt="Post" 
                 />
                </picture>
              ) : null}
              <div className="card-body">
                <div className='border-top d-flex justify-content-between'>
                  <button onClick={toggleCommentForm} className="d-flex btn m-2" id='btn-post-comment'>
                    <FaRegCommentDots />
                    <p className='ps-4'>Commenter</p>
                  </button>
                  {user && (user.admin || user.id === post.userId) ? (
                    <>
                      <div className='navbar navbar-expand-md'>
                        <button className="navbar-toggler collapsed btn-collapsed-nav" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-post-options"
                      aria-controls="collapseExample" aria-expanded="false" aria-label="Toggle navigation" id="btn-post-options-collapse">
                        <FaEllipsisH />
                        </button>
                        <div className='navbar-collapse collapse' id="collapse-post-options">
                          <button onClick={openPopupPostEdit} className="btn m-2 d-flex" id='btn-post-edit'>
                            <FaRegEdit />
                            <p className='ps-4'>Editer</p>
                          </button>
                          <button onClick={deletePost} className="btn m-2 d-flex" id='btn-post-delete'>
                            <FaTrashAlt />
                            <p className='ps-4'>Effacer</p>
                          </button>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              {commentForm ? <CommentForm postId={post.id}/> : null}
              <CommentDisplay postId={post.id} />
            </section>
          </div>
          <div className={`popup_postEdit ${togglePopup ? 'open-popup_postEdit' : ''}`}
            id="popup">
                <div className='card border shadow'>
                  <div className='d-flex justify-content-end'>
                    <p onClick={openPopupPostEdit} className='btn pt-3 ' id='btn-close-edit-post'>
                      <FaRegWindowClose />
                    </p>
                  </div>
                  <div>
                    <div className='p-3' id='icon-post-edit' >
                      <FaRegEdit />
                    </div>
                  </div>
                  <PostFormModify id={post.id} />
                  </div>
                </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Nav/>
        <main>
          <div className="container mt-3">
            <div className="p-3 d-flex justify-content-center">
              < PulseLoader
              color="#FFD7D7"
              speedMultiplier={0.7}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default SinglePost;