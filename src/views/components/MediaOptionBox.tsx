import * as React from "react";
import List from "@mui/material/List";
import { BiCamera } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";

export default function MediaOptionBox(){
    return(
        <List
        style={{
            position:'fixed',
            bottom:'4rem',
            background: "#008000",
            color: "#fff",
            fontWeight: "bolder",
            zIndex:'999999',
            borderRadius:'2rem',
            right:'1rem',
            height:'44px',
            width:'120px',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            cursor:'pointer'
        }}
        >
            <BiCamera />
            <BsCameraVideo />
            <BsFileText />
        
    </List> 
    )
}