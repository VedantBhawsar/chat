import React from 'react'
import Avatar from '../img/Avatar.jpg'
import "../App.scss"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className='allchats'>
        <div className="chat">
          <img src={Avatar} width={"45vh"} height={"45vh"} alt="avatar" />
          <div>
            <h8 className="title">Pragati Hadbe</h8>
            <div className='desc'>heyy vedant</div>
          </div>
        </div>
        <div className="chat">
          <img src={Avatar} width={"45vh"} height={"45vh"} alt="avatar" />
          <div>
            <h8 className="title">Pragati Hadbe</h8>
            <div className='desc'>heyy vedant</div>
          </div>
        </div>
        <div className="chat">
          <img src={Avatar} width={"45vh"} height={"45vh"} alt="avatar" />
          <div>
            <h8 className="title">Pragati Hadbe</h8>
            <div className='desc'>heyy vedant</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search