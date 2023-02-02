import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';
import { db } from '../firebase';
import Avatar from '../img/Avatar.jpg'

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="allchats">
      {
        Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
          <div
            className="chats"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="info">
              <span className="title">{chat[1].userInfo.displayName}</span>
              <p className='desc'>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Chats

