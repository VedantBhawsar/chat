import React from 'react'
import "../App.scss"
import { GrFormUpload } from 'react-icons/gr'
import { Link } from 'react-router-dom'


const Resister = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Noob Chat</span>
                <span className='title'>Resister</span>
                <hr />
                <form>
                    <input className='input' type="text" placeholder='name' />
                    <input className='input' type="email" placeholder='email' />
                    <input className='input' type="password" placeholder='password' />
                    <input style={{ display: "none" }} type="file" id='upload' />
                    <label htmlFor="upload">
                        <GrFormUpload className='GrFormUpload' />
                        Add An Avatar
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have An Account? <Link className='Link' to={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default Resister