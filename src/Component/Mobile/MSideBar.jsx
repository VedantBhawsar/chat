import React from 'react'
import NavBar from '../NavBar'
import Search from '../Search'
import MChats from './MChats'

const SideBar = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className='sidebar'>
                    <NavBar />
                    <Search />
                    <MChats />
                </div>
            </div>
        </div>
    )
}

export default SideBar