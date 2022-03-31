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
        projectID={projecID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;