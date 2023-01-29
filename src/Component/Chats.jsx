import React from 'react'

import Avatar from '../img/Avatar.jpg'

const Chats = () => {
  return (
    <div className="allchats">
      <div className="chats">
        <img src={Avatar} width={"45vh"} height={"45vh"} alt="avatar" />
        <div className='info'>
          <h8 className="title">Buddy</h8>
          <div className='desc'>heyy😄</div>
        </div>
      </div>
    </div>
  )
}

export default Chats