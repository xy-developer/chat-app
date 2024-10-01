import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {BsThreeDotsVertical} from "react-icons/bs";
import { useChatData } from "../../hooks";
import ModelBox from "./MoelBox";

export default function SenderReciever(){
  const [openModel , setOpenModel] = React.useState(false);
  const {chatData} = useChatData();

  const avatarGroupProfile = new Set()
  const getAvatarGroupChat = async () =>{
    const {chats} = chatData;
    for(let i=0;i<chats?.length;i++){
      const {sender} = chats[i];
        avatarGroupProfile.add(sender.image);
    }
  }

  getAvatarGroupChat();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "none",
          width:'100%'
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 0 }}
          >
            <div className="group-avatar">
              {
                Array.from(avatarGroupProfile).slice(0,4).map((url,index)=>{
                  return(
                    <img 
                    key={index}
                    src={url} 
                    alt="profile"
                    />
                  )
                })
              }
            </div>
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
          <Typography fontSize='1.2rem'>
            From <b>{chatData.from}</b>
          </Typography>
          <Typography fontSize='1.2rem'>
            To <b>{chatData.to}</b>
          </Typography>

          </Box>
          <BsThreeDotsVertical 
          onClick={()=> setOpenModel(!openModel)}
          fontSize='1.5rem'/>
        </Toolbar>
      </AppBar>
    </Box>

    {
      openModel && <ModelBox/>
    }
    </>


  )
}
