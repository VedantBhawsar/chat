import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = () => {
        setCurrentUser('null')
        localStorage.clear()
        navigate("/login")
    }
    return (
        <div className='navbar'>
            <div className='title'>Noob Chat</div>
            <div>
                <span>{currentUser.displayName}</span>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
}

export default NavBar