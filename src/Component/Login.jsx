import React from 'react'
import "../App.scss"
import { GrFormUpload } from 'react-icons/gr'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Noob Chat</span>
                <span className='title'>Login</span>
                <hr />
                <form>
                    <input className='input' type="email" placeholder='email' />
                    <input className='input' type="password" placeholder='password' />
                    <input style={{ display: "none" }} type="file" id='upload' />
                    <label htmlFor="upload">
                        <GrFormUpload className='GrFormUpload' />
                        Add An Avatar
                    </label>
                    <button>Sign In</button>
                </form>
                <p>Don't have account?<Link className='Link' to={'/resister'}>Resister</Link></p>
            </div>
        </div>
    )
}

export default Login