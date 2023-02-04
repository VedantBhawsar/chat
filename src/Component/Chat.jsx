import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ChatContext } from '../Context/ChatContext'
import Avatar from '../img/Avatar.jpg'
import Input from './Input'
import Massages from './Massages'
const Chat = () => {
    const { data } = useContext(ChatContext);
    const { DeviceInfo } = useContext(AuthContext)
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <div className='userinfo'>
                    <img src={data.user?.photoURL} width={"45vh"} height={"45vh"} alt="" />
                    <span></span>
                    <div>
                        <span>{data.user?.displayName}</span>
                        <div className='status'>Online</div>
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