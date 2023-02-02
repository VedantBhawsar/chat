import React, { useContext } from 'react'
import Chat from './Chat'
import "../App.scss"
import SideBar from './SideBar'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)
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