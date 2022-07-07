import '../../custom.css';
import logoIcon from '../../assets/images/icon.svg';
import { FaHome, FaUserAlt, FaBars } from 'react-icons/fa';
import { FiLogOut  } from "react-icons/fi";


import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Nav() {

    const [token,setToken] = useState(null)

    const navigate = useNavigate()

    const logOut = () => {
      localStorage.clear();
      navigate ("/login")
    }
    
    useEffect(() => {
      setToken(localStorage.token)
    }, [])

    if(!token) {
      navigate("/login")
    };

  return(
    <header>
      <nav className="navbar sticky-top navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-brand ps-3" >
              <NavLink to="/">
              <img src={logoIcon} onClick={navigate} alt='Groupomania navLogo'/>
              </NavLink>
          </div>



          <button className="navbar-toggler collapsed btn-collapsed-nav" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
            </div>
{/* 
     <button class="navbar-toggler collapsed btn-collapsed-nav p-3" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
        <i class="fas fa-bars"></i>
      </button>
      <div class="navbar-collapse collapse" id="main_nav">
        <form class="form-inline col-lg p-3" data-np-checked="1">
          <input type="Text" class="form-control" placeholder="Recherche de Produits" aria-label="Search" data-np-checked="1">
        </form>
        <div class="navbar-item p-3">
          <button type="button" class="btn btn-outline-primary me-2">Connexion</button>
          <button type="button" class="btn btn-outline-secondary me-2"><i class="fas fa-heart"></i></button>
          <button  type="button" class="btn btn-outline-tertiary" onclick="window.location.href='./cart.html';"><i class="fas fa-shopping-basket"></i></button>
        </div> */}

            <div className="navbar-disconnect me-2 pe-3">
              <NavLink to="/">
                <button className="btn">
                  <FaHome />
                </button>
              </NavLink>
              <NavLink to="/account">
                <button className="btn">
                  <FaUserAlt />
                </button>
              </NavLink>
              <button className="btn" onClick={logOut} id='btn-logout'>
               <FiLogOut />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;