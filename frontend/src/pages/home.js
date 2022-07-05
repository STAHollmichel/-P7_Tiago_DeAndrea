import '../custom.css';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import PostForm from '../components/forms/posts/postForm';
import PostWall from './wall';



function Home() {
  return (
    <div className='page__wrapper'>
      <Header />
      <main className='container-fluid bg-light'>
        <PostForm />
        <PostWall />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
