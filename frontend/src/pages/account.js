import '../custom.css';
import { useState, useEffect } from "react";
import axios from "axios";


import Footer from '../components/layout/footer';
import Nav from '../components/layout/nav';

import SignUpFormModify from '../components/forms/user/signUpFormModify';

function AccountProfile() { 

    const [user, setUser] = useState({});
    const [modify, setModify] =useState(false)

    const toggleModify = () => {

        setModify(!modify);

    }

    const deleteAccount = () => {
        axios
            .delete("http://localhost:3002/api/auth/")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {

        axios
            .get("http://localhost:3002/api/auth/")
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((err) => console.log(err));
    }, []);

        return (
            <div className='page__wrapper'>
                <Nav />
                <main className='container-fluid bg-light'>
                    <div className='container py-4'>
                        <div className='card mb-3'>
                            <picture>
                                <img src={user.profilePhoto} className='card-img-top' alt="Profile"/>
                            </picture>
                            <div className='card-body text-center'>
                                <h1>Hello</h1>
                                <h2>{user.firstName} {user.lastName}</h2>
                                <p>{user.age}</p>
                                <p>{user.profession}</p>
                                <p>{user.bio}</p>
                                <button onClick={toggleModify} className='btn btn-primary'>Editer le profile</button>
                            </div>
                            <SignUpFormModify modify={modify} />
                            <div>
                                <button onClik={deleteAccount} className='btn btn-primary'>Effacer le profile</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );

}



export default AccountProfile;
