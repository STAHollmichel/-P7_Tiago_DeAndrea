import '../../custom.css';
import logoIcon from '../../assets/images/icon.svg';
import { FaHome, FaUserAlt, FaBars } from 'react-icons/fa';
import { FiLogOut  } from "react-icons/fi";


import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "bootstrap/js/src/collapse.js";


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
          <div className="navbar-collapse collapse" id="navbarText">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
            </div>
            <div className="navbar-disconnect me-lg-2 pe-lg-3 d-flex justify-content-end">
              <NavLink to="/" className={'nav-item'} >
                <button className="btn">
                  <FaHome />
                </button>
              </NavLink>
              <NavLink to="/account" className={'nav-item'} >
                <button className="btn">
                  <FaUserAlt />
                </button>
              </NavLink>
              <button className="btn nav-item" onClick={logOut} id='btn-logout' >
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