import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Components/firebase";
import Logo from "../Images/Screenshot (17).png";
import Loginpic from "../Images/login.webp"
import Loginpic2 from "../Images/login2.webp"
function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (<>
        <div className='login'>
        
            <Link to='/'>
                <img
                    className="login__logo"
                    src={Logo} 
                />
            </Link>
            <div className="row mx-auto">
            <img  className="loginpic col-md-4 mx-auto" src={Loginpic}/>
            <div className="login__container col-md-4">
                <h1 className="blacki">Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} required onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} required onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p className="text-center">
                    By signing-in you agree to the Ajstore Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
            <img className="loginpic2 col-md-4 mx-auto" src={Loginpic2}/>
        </div>
        </div>
        </>
    )
}

export default Login