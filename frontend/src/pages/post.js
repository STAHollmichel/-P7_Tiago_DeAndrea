import { FaRegCommentDots, FaRegEdit, FaRegWindowClose, FaTrashAlt, FaUserAlt } from 'react-icons/fa';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';
import PostFormModify from '../components/forms/posts/postFormModify';
import CommentDisplay from '../components/layout/comment';




const SinglePost = () => {
  
  const params = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState();
  const [user, setUser] = useState();

  const [togglePopup, setTogglepopup] = useState(false);


  const openPopupPostEdit = () => {
    setTogglepopup(!togglePopup);
  };

  useEffect(() => {
    axios.get('http://localhost:3002/api/posts/' + params.id)
    .then((result) => {
      setPost(result.data);
    });
    axios.get('http://localhost:3002/api/auth')
    .then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const deletePost = () => {
    axios
      .delete('http://localhost:3002/api/posts/' + params.id)
      .then((result) => {
        alert('Post Suprimé!');
        navigate('/');
      });
  };

  const commentPost = () => {
    navigate('/comment_create/' + post.id);
  };

  if (post) {
    return (
      <div className="page__wrapper">
        <Nav />
        <main className="container-fluid bg-light" id="main-post">
          <div className="container pt-3 col-lg-4">
            <section className="card mb-4 border shadow-sm">
              <article className='card__body p-3'>
                <div className='container border-bottom d-flex justify-content-between'>
                  <div className='d-flex' id='post-user-icon'>
                    <FaUserAlt />
                    <h1 className='pt-2 ps-3'>{post.User.firstName} {post.User.lastName}</h1>
                  </div>
                  <p className='pt-2 pe-3 text-muted' id='post-timestamp'>{post.createdAt}</p>
                </div>
                <div>
                  <p className='p-3'>{post.postDescription}</p>
                </div>
              </article>
              <picture>
                <img src={post.postPhoto} className="card-img-fluid border-top border-bottom" alt="Post" />
              </picture>
              <div className="card-body">
                <div className='border-top d-flex justify-content-between'>
                  <button onClick={commentPost} className="d-flex btn m-2" id='btn-post-comment'>
                    <FaRegCommentDots />
                    <p className='ps-4'>Commenter</p>
                  </button>
                  {user && (user.admin || user.id === post.userId) ? (
                    <>
                      <div className='d-flex'>
                        <button onClick={openPopupPostEdit} className="btn m-2 d-flex" id='btn-post-edit'>
                          <FaRegEdit />
                          <p className='ps-4'>Editer</p>
                        </button>
                        <button onClick={deletePost} className="btn m-2 d-flex" id='btn-post-delete'>
                          <FaTrashAlt />
                          <p className='ps-4'>Effacer</p>
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <CommentDisplay postId={post.id} />
            </section>
          </div>
          <div className={`popup_postEdit ${togglePopup ? 'open-popup_postEdit' : ''}`}
            id="popup">
                <div className='card border shadow'>
                  <div className='d-flex '>
                    <div className='p-3'>
                      <FaRegEdit />
                    </div>
                    <p onClick={openPopupPostEdit} className='btn pt-3 d-flex' id='btn-close-edit-post'>
                    <FaRegWindowClose />
                    </p>
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
            <div className="card mb-3">
              <h1>Post indisponible!</h1>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default SinglePost;