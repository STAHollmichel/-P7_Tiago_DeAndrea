// Styles
import './custom.css';



// Routing
import axios from "axios";
import { Routes, Route} from 'react-router-dom';

//Pages
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home'
import AccountProfile from './pages/account';
import SinglePost from './pages/post';
import PostWall from './pages/wall';




// Components

function App() {

  axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
    
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/account" element={<AccountProfile/>} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/wall" element= {<PostWall/>} />
        </Routes>
      </div>
  );
}

export default App;
