import { Box, Typography } from "@mui/material"
import React from "react"
export default function SenderMsg(props){
    return(
        <Box 
        sx={{ width: '100%',
        display:'flex',
        backgroundColor:'#1C63D5',
        justifyContent:'start',
        boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.08)',
        margin:'0 -0.5rem 1rem 0rem',
        borderRadius: '12px 0px 12px 12px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px',
        gap: '16px',
        order: '1',
        flexGrow: '0',
        color:'#fff',
         }}
        >
        <Typography
        sx={{
        fontStyle: 'normal',
        fontWeight: 'lighter',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#FFFFFF',
        }}
        >
        {props.senderMsg}
        </Typography> 
        </Box>
    )
}