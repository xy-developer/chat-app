import { useContext } from "react";
import { ChatDataContext } from "../context/ChatDataProvider";

export const useChatData = () => useContext(ChatDataContext)