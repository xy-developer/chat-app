import { Typography } from '@mui/material'
import React from 'react'
import { useChatData } from '../../hooks';

const MainContainer = ({children}) => {
  const {getMoreChatData,seeMore, isLoading} = useChatData();

  const handleOlderChats = async() =>{
    getMoreChatData();
    console.log(seeMore)
  }
  return (
    <div 
        style={{
            margin:'0',
            padding:'0',
            width:'100%',
            height:'100vh',
            marginTop:'10rem',
            background:'#FAF9F4',
        }}
    >
      <Typography 
      onClick={handleOlderChats}
        style={{
              textAlign:'center',
              fontWeight:'lighter',
              opacity:'0.5'
              }}
        >
        See older chats
      </Typography>
        {children}
    </div>
  )
}

export default MainContainer