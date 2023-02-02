import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../Context/ChatContext';
import { db } from '../firebase';
import Massage from './Massage'

const Massages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='massages'>
      {messages.map((m) => (
        <Massage message={m} key={m.id} />
      ))}
    </div>
  )
}

export default Massages