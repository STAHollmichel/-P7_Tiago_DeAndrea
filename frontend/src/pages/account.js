// Styles
import '../custom.css';
import { RiCakeFill, RiFileUserLine } from "react-icons/ri";
import { FaBriefcase, FaUserSlash } from 'react-icons/fa';

// React State & effect
import { useState, useEffect } from "react";

// Routing
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Components
import Footer from '../components/layout/footer';
import Nav from '../components/layout/nav';




function AccountProfile() { 

    const [user, setUser] = useState({});



    const navigate = useNavigate()

    const deleteAccount = () => {
        axios
            .delete(process.env.REACT_APP_API + '/api/auth/')
            .then((res) => {
                navigate ("/login")
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
    
    useEffect(() => {

        axios
            .get(process.env.REACT_APP_API + '/api/auth/')
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((err) => console.log(err));
    }, []);

        return (
            <div className='page__wrapper'>
                <Nav />
                <main className='container-fluid bg-light' id='main-account'>
                    <div className='container py-4 col-lg-4'>
                        <section className='card mb-3 shadow'>
                            <article className='container card__body text-center'>
                                <div className='container pt-3'>
                                    <h1>{user.firstName} {user.lastName} </h1>
                                        <div className='d-flex justify-content-center'>
                                            <div className='d-flex ps-4' id='account-cake-icon'>
                                                <RiCakeFill />
                                                <p className='ps-2'>{user.age} ans</p>
                                            </div>
                                            <div className='d-flex ps-4' id='account-briefcase-icon'>
                                                <FaBriefcase />
                                                <p className='ps-2'>{user.profession}</p>
                                            </div>
                                        </div>
                                </div>
                                <div className='shadow-sm p-2'>
                                    <div className='pt-2'>
                                        <div className='d-flex' id='account-bio-icon'>
                                            <RiFileUserLine />
                                            <h2>Bio</h2>
                                        </div>
                                    </div>
                                    <p className='text-start text-wrap text-break'>{user.bio}</p>
                                </div>
                                {user && (user.admin || user.id ) ? (
                                    <>
                                        <div className='d-flex justify-content-end'>
                                            <button onClick={deleteAccount} className='btn m-2 d-flex' id='btn-account-delete'>
                                                <FaUserSlash/>
                                                <p className='ps-4'>Effacer le profile</p>
                                            </button>
                                        </div>
                                    </>
                                    ) : null}
                            </article>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        );

}



export default AccountProfile;
