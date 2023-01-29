import React from 'react'
import Avatar from '../img/Avatar.jpg'
import "../App.scss"
import Chats from './Chats'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform" style={{ flexDirection: 'column' }}>
        <input type="text" placeholder='Find a user' />
      </div>
      <Chats />
      {/* {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div> */}
      {/* </div > */}
    </div >
  )
}

export default Search