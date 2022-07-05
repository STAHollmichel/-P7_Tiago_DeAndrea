import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import PostFormModify from '../components/forms/posts/postFormModify';
import CommentDisplay from './comment';


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
        <Header />
        <main className="container-fluid bg-light" id="main-post_single">
          <div className="container pt-3 col-lg-5">
            <div className="card mb-3">
              <picture>
                <img src={post.postPhoto} className="card-img-top" alt="Post" />
              </picture>
              <div className="card-body text-center ">
              {/* {posts.length
                ? posts.map((post) => {
                    <div>
                      <em>
                         Author: {post.User.firstName} {post.User.lastName}
                      </em>
                    <p>{post.postDescription}</p>
                  </div>
                })
              : null} */}
                {user && (user.admin || user.id === post.userId) ? (
                  <>
                    <button
                      onClick={openPopupPostEdit}
                      className="btn btn-tertiary m-2"
                    >
                      Editer
                    </button>
                    <button onClick={deletePost} className="btn btn-primary m-2">
                      Effacer
                    </button>
                  </>
                ) : null}
                <button onClick={commentPost} className="btn btn-secondary m-2">
                  Commenter
                </button>
              </div>
            </div>
          </div>
          <CommentDisplay postId={post.id} />
          <div className={`popup_postEdit ${togglePopup ? 'open-popup_postEdit' : ''
            }`}
            id="popup">
                <p onClick={openPopupPostEdit}>Fermer</p>
                 <PostFormModify id={post.id} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
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