import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { HiOutlineUsers } from "react-icons/hi";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';


export default function ModelBox(){
    return(
        <List
        sx={{
            position:'fixed',
            background:'#fff',
            color: "#000",
            fontWeight: "bolder",
            zIndex:'999999',
            right:'0.5rem',
            margin:'-0.8rem 0.5rem 0 0',
            borderRadius:'0.5rem',
            boxShadow:'5px 5px 5px rgba(0,0,0,0.08)',
            cursor:'pointer'
        }}
         >
            <ListItem sx={{display:'flex',gap:'1rem'}}>
            <HiOutlineUsers />
            <Typography>Members</Typography>
            </ListItem>
            <Divider />
            <ListItem divider sx={{display:'flex',gap:'1rem'}}>
            <CallOutlinedIcon />
            <Typography>Share Number</Typography>
            </ListItem>
            <ListItem sx={{display:'flex',gap:'1rem'}}>
            <ReportGmailerrorredIcon />
            <Typography>Report</Typography>
            </ListItem>
        </List> 
    )
}