// Styles
import './App.css';



// Routing
import axios from "axios";
import { Routes, Route} from 'react-router-dom';

//Pages
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home'


// Components

function App() {

  axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
    
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;
