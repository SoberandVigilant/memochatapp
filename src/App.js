import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'bb7480a5-309a-4bd8-9f20-2b5f78b19f99';

const App = () => {
      if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
        height="100vh"
        projectID=" "
        userName="TheSoberOne"
        userSecret="Redeemed33" 
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;