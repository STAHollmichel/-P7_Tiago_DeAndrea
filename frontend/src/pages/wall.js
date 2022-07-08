import '../custom.css';
import { FiThumbsUp } from "react-icons/fi";
import { FaRegEye, FaUserAlt } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




function PostWall() {
    
  const [posts, setPosts] = useState([]);
  // const [date, setDate] = useState([]);

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


  // const currentTimestamp = () => {
  //   axios
  //     .get('http://localhost:3002/api/posts' )
  //     .then((post) => {
  //       setDate(post.createdAt);
  //     })
  //    date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp);
  // };





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
                        <FaUserAlt />
                        <h1 className='pt-2 ps-3'>{post.User.firstName} {post.User.lastName}</h1>
                      </div>
                      <p className='pt-2 pe-3 text-muted' id='post-timestamp'>{post.createdAt}</p>
                    </div>
                    <div>
                      <p className='p-3'>{post.postDescription}</p>
                    </div>
                  </article>
                <picture className='pt-1'>
                  <img
                    src={post.postPhoto}
                    className="card-img-fluid"
                    alt="Post"
                  />
                </picture>
                <div className="card-body text-center">
                  <div className='border-top d-flex justify-content-between'>
                    <Link to={`/post/${post.id}`}>
                      <button className='btn ms-3 pt-3' id='btn-checkout-post'>
                        <FaRegEye />
                        <p>Voir le post</p>
                      </button>
                    </Link>
                    <button onClick={() => like(post.id)} className="btn ms-3 pt-3 d-flex" id='btn-like'>
                      <FiThumbsUp />
                      <p>J'aime </p>
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