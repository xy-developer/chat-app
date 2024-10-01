import ChatDataProvider from "./context/ChatDataProvider";
import ChatScreen from "./views/containers/ChatScreen";

export default function App() {
  return (
    <ChatDataProvider>
      <ChatScreen/>
    </ChatDataProvider>
  )
}
