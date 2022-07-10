import '../custom.css';
import { FiThumbsUp } from "react-icons/fi";
import { FaRegEye, FaUserAlt } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


function PostWall() {
    
  const [posts, setPosts] = useState([]);
  

  console.log(posts);

  const like = (postId) => {
    axios
      .post('http://localhost:3002/api/posts/' + postId + '/like')
      .then((result) => {
        console.log(result);
        getPosts();
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:3002/api/posts')
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="container py-4 col-lg-4">
      {posts.length
        ? posts.map((post) => {
            console.log(post.User);
            return (
              <section className="card mb-4 border shadow-sm">
                  <article className='card__body p-3'>
                    <div className='container border-bottom d-flex justify-content-between'>
                      <div className='d-flex' id='wall-post-user-name'>
                      {/* <NavLink to={`/account/${post.User.id}`}> */}
                        <NavLink to='/account'>
                          <FaUserAlt />
                          <h1 className='pt-2 ps-3'>{post.User.firstName} {post.User.lastName}</h1>
                        </NavLink>
                      </div>
                      {/* <p className='pt-2 pe-3 text-muted' id='post-timestamp'>{post.createdAt}</p> */}
                    </div>
                    <div>
                      <p className='pt-3 px-3'>{post.postDescription}</p>
                    </div>
                  </article>
                  {post.postPhoto ? (
                <picture className='pt-1 '>
                  <img src={post.postPhoto} className="card-img-fluid border-top border-bottom" alt="Post"
                  />
                </picture>
                  ) : null}
                <div className="card-body text-center">
                  <div className='border-top d-flex justify-content-between'>
                    <Link to={`/post/${post.id}`}>
                      <button className='btn pt-3' id='btn-post-checkout'>
                        <FaRegEye />
                        <p className='ps-2'>Voir le post</p>
                      </button>
                    </Link>
                    <button onClick={() => like(post.id)} className="btn ms-3 pt-3 d-flex" id='btn-like'>
                      <FiThumbsUp />
                      <p className='ps-2'>J'aime </p>
                      <p className='ps-2' id='like-counter'>{post.userLike}</p>
                    </button>
                  </div>
                </div>
              </section>
            );
          })
        : null}
    </div>
  );
}

export default PostWall;