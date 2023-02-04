import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { db } from '../../firebase';
import Avatar from '../../img/Avatar.jpg'
import { ChatContext } from '../../Context/ChatContext';

const MChats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const navigate = useNavigate()
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
        navigate('/chat')
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
                        <img src={chat[1].userInfo ? chat[1].userInfo.photoURL : Avatar} alt="" />
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

export default MChats