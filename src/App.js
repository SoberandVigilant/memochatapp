import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID=" bb7480a5-309a-4bd8-9f20-2b5f78b19f99"
        userName="TheSoberOne"
        userSecret="qwer1234" 
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;