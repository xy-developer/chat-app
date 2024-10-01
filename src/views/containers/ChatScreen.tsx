import { CssBaseline } from "@mui/material";
import HeadContainer from "../components/HeadContainer";
import { Suspense } from "react";
import ChatHead from "../components/ChatHead";
import SenderReciever from "../components/SenderReciever";
import MainContainer from "../components/MainContainer";
import Loading from "../components/Loading";
import Chatbody from "../components/ChatBody";
import ReplayInput from "../components/ReplayInput";

export default function ChatScreen() {

    return (
        <>
        <CssBaseline />
        <HeadContainer>
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading ...</p>}>
        <ChatHead/>
        <SenderReciever/>
        </Suspense>
        </HeadContainer>
        <MainContainer>
            <Suspense fallback={<Loading/>}>
            <Chatbody/>
            </Suspense>
        </MainContainer>
        <ReplayInput/>
        </>
    )
}