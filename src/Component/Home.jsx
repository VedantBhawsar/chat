import React from 'react'
import { Link } from 'react-router-dom'
import Chat from './Chat'
import "../App.scss"
import SideBar from './SideBar'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <SideBar />
                <Chat />
            </div>
        </div>
    )
}

export default Home