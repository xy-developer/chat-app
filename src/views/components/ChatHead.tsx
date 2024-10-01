import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {FiEdit} from "react-icons/fi";
import { useChatData } from "../../hooks";

export type FixMeLater = any

export default function ChatHead(){
  const {chatData} = useChatData();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            id="arrow-back-icons"
          >
            <ArrowBackIcon 
            sx={{
              fontSize:'1.8rem',
              color:'#000',
              fontWeight:'bold'
              }}/>
          </IconButton>
          <Typography variant="h5" fontWeight='bolder' component="div" sx={{ flexGrow: 1 }}>
            {chatData.name}
          </Typography>
          <FiEdit />
        </Toolbar>
      </AppBar>
    </Box>


  )
}
