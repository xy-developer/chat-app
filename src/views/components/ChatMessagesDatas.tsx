import React, { useEffect, useState } from 'react'
import { useChatData } from '../../hooks';
import ReceiverMsg from './ReceiverMsg';
import SenderMsg from './SenderMsg';
import { Box, Divider, Typography } from '@mui/material';
import moment from 'moment';

const ChatMessagesDatas = () => {
    const {chatData, messageDate} = useChatData();
    const {chats} = chatData

  return (
    <>
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'0.5rem',
      gap:'0.5rem'
    }}>
    <Divider sx={{ width: "100px" }} />
    <Typography sx={{color:'grey'}}>
    {moment(messageDate).format(
          `DD MMM, YYYY`
          )}
    </Typography>
    <Divider sx={{ width: "100px" }} />
    </Box> 
    {
        chats?.map((msg, index)=>{
            return(
                <div
                key={index}
                >
                {
                  msg.sender.self ? (
                  <SenderMsg
                  senderMsg={msg.message}
                  />) : (
                      <ReceiverMsg
                    isVerified={msg.sender.is_kyc_verified}
                    userProfile={msg.sender.image}
                    receiverMsg={msg.message}
                    />
                    )
                }
                </div>
            )
        })
    }
    </>
  )
}

export default ChatMessagesDatas