import React from 'react'
import Avatar from '../img/Avatar.jpg'
import Input from './Input'
import Massages from './Massages'
const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <div className='userinfo'>
                    <img src={Avatar} width={"45vh"} height={"45vh"} alt="" />
                    <div>
                        <span>Pragati Hadbe</span>
                        <div>Online</div>
                    </div>
                </div>
            </div>
            <div>
                <Massages />
                <Input />
            </div>
        </div>
    )
}

export default Chat