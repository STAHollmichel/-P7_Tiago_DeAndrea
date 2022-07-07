import '../custom.css';

import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';

import PostForm from '../components/forms/posts/postForm';
import PostWall from './wall';




function Home() {
  return (
    <div className='page__wrapper'>
      <Nav />
      <main className='container-fluid bg-light' id='main-home'>
        <PostForm />
        <PostWall />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
