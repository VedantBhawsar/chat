import React from 'react'
import { RxAvatar } from 'react-icons/rx'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='title'>Noob Chat</div>
            <div>
                <RxAvatar />
                <div>Vedant</div>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default NavBar