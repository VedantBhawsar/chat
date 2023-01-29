import React from 'react'
import Avatar from '../img/Avatar.jpg'

const Massage = () => {
    return (
        <div
            // ref={ref}
            className={`message owner `}
        >
            <div className="messageInfo">
                <img
                    src={
                        Avatar
                    }
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Love You</p>
                <img src={Avatar} alt="" />
                {/* {message.img && <img src={message.img} alt="" />} */}
            </div>
        </div>
    )
}

export default Massage