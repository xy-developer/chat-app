import { Container, Typography } from "@mui/material"
import React from "react"
import { useChatData } from "../../hooks";
import Loading from "./Loading";
import ChatMessagesDatas from "./ChatMessagesDatas";


export default function Chatbody(){
    const {getLessChatData,seeMore, isLoading} = useChatData();

    const handleOlderChats = async() =>{
        getLessChatData();
        console.log(seeMore)
      }
    return(
        <Container 
        sx={{
            position:'absolute',
            marginBottom:'12rem'
        }}
        >
         {
            isLoading ? (<Loading/>) :(<ChatMessagesDatas/>)
        } 
        {
           !isLoading && seeMore ? (
                <Typography
                onClick={handleOlderChats}
                style={{
                    textAlign:'center',
                    marginBottom:'4rem',
                    opacity:'0.5'
                    }}
                >
                See newer Chats
            </Typography>
            ) : null
            
        }

            <Typography
                style={{
                    textAlign:'center',
                    marginBottom:'1rem',
                    visibility:'hidden'
                    }}
                >
                See newer Chats
            </Typography>
        </Container>
    )
}