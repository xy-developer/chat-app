import { Avatar, Box, Container, Typography } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import React from "react"

export default function ReceiverMsg(props){

    return(
        <Container
         style={{
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'start',
            gap:'0.4rem',
            marginLeft:'-1.5rem'
        }}>
        {
            props.isVerified === true ? <VerifiedIcon
            sx={{
                position:'absolute',
                width:'15px',
                height:'15px',
                color:'#1C63D5',
                transform:'translate(27px,27px)',
                zIndex:'1'
            }}
            /> : null
        }

            <Avatar 
            src={props.userProfile} 
            alt="userProfilePicture"
             />

    <Box 
    sx={{ width: '100%',
    display:'flex',
    backgroundColor:'#fff',
    justifyContent:'start',
    boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.08)',
    margin:'0 0.5rem 1rem 0',
    borderRadius: '0px 12px 12px 12px',
    border:'1px solid rgba(0, 0, 0, 0.09)',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    gap: '16px',
    order: '1',
    flexGrow: '0',
    }}>
    <Typography
        sx={{
            fontStyle: 'normal',
            fontWeight: 'lighter',
            fontSize: '14px',
            color: '#606060',
            lineHeight: '18px',
        }}
        >
        {props.receiverMsg}
    </Typography> 

    </Box>
</Container>
    )
}