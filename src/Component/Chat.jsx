import React from 'react'
import Avatar from '../img/Avatar.jpg'
const Chat = () => {
    return (
        <div>
            <div className='chatInfo'>
                <div className='userinfo'>
                    <img src={Avatar} width={"45vh"} height={"45vh"} alt="" />
                    <div>
                        <span>Pragati Hadbe</span>
                        <div>Online</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat