import React, { useState } from 'react'
import "../App.scss"
import { GrFormUpload } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
            console.log("Login SuccessFully")
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Noob Chat</span>
                <span className='title'>Login</span>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input className='input' type="email" placeholder='email' />
                    <input className='input' type="password" placeholder='password' />
                    <button>Sign In</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have account?<Link className='Link' to={'/register'}>Register</Link></p>
            </div>
        </div>
    )
}

export default Login