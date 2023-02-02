import React, { useContext, useState } from 'react'
import "../App.scss"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { CSpinner } from '@coreui/react'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    const [err, setErr] = useState(false);
    const [spinner, setSpinner] = useState(false)
    const { setCurrentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true)
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password).then(
                (res) => {
                    setCurrentUser(res.user)
                    localStorage.setItem("password", password)
                    localStorage.setItem("email", email)
                }
            )
            navigate("/")
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
                    <button>
                        {
                            spinner ? <CSpinner /> :
                                <span>Sign In</span>

                        }
                    </button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have account?<Link className='Link' to={'/register'}>Register</Link></p>
            </div>
        </div>
    )
}

export default Login