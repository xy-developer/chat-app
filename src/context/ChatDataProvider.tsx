import React, { createContext, useEffect, useState } from 'react';
import { getChatMessageData } from '../services/chatMessage';

export const ChatDataContext = createContext("");

export default function ChatDataProvider({ children } : any) {

  const [messageDate, setMessageDate] = useState('');

  const [chatData, setChatData] = useState([]);
  const [seeMore , setSeeMore] = useState(0);
  const [isLoading , setIsLoading] = useState(false);

  const getMessageInfo = async () => {
    const res = await getChatMessageData(seeMore);
    setMessageDate(res.chats[0].time);

    if (res.error) return console.log(res.error);
    setChatData(res);
    if(seeMore){
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMessageInfo();
  }, [seeMore,isLoading]);


  const getMoreChatData = async() =>{
    setIsLoading(true);
    setSeeMore(seeMore+1);
  }

  const getLessChatData = async() =>{
    setIsLoading(true);
    setSeeMore(seeMore-1);
    setIsLoading(false);
  }

  return (
    <ChatDataContext.Provider value={{ chatData,messageDate, getMoreChatData,seeMore,getLessChatData,isLoading }}>
      {children}
    </ChatDataContext.Provider>
  );
}
