import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";
import MediaOptionBox from "./MediaOptionBox";

export default function ReplayInput(){
  const [openMediaOption, setOpenMediaoption] = React.useState(false);

  return (
        <>
        <Paper
      component="form"
      sx={{ 
        boxShadow:'none',
        position:'fixed',
        bottom:'0rem',
        display:'flex',
        flexDirection: 'row',
        padding: '5px 6px',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '8px',
        width:'100%',
        zIndex:'5555'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Reply to @Rohit Yadav"
        inputProps={{ "aria-label": "Reply to @Rohit Yadav" }}
      />
      <IconButton 
      id="paper-clip-icons"
      onClick={()=> setOpenMediaoption(!openMediaOption)}
      type="button" sx={{ p: "10px" }}>
        <AiOutlinePaperClip  />
      </IconButton>
      <IconButton
      id="send-icons-btn"
       color="#141E0D" sx={{ p: "10px" }}>
        <AiOutlineSend />
      </IconButton>
    </Paper>

    {
      openMediaOption && 
      <MediaOptionBox/>
    }
    </>
  )
}
