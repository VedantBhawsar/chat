import React from 'react'
import { RxAvatar } from 'react-icons/rx'

const NavBar = () => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log("Hello")
    }
    return (
        <div className='navbar'>
            <div className='title'>Noob Chat</div>
            <div>
                <RxAvatar />
                <div>Vedant</div>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
}

export default NavBar