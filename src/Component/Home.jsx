import React, { useContext } from 'react'
import Chat from './Chat'
import "../App.scss"
import SideBar from './SideBar'
import { AuthContext } from '../Context/AuthContext'
import MChat from './Mobile/MChat'

const Home = () => {
    const { currentUser, setCurrentUser, DeviceInfo } = useContext(AuthContext)
    console.log(currentUser)
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