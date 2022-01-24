import { ChatEngine } from 'react-chat-engine';
import ChatFeed from'../../components/chat/ChatFeed'
import LoginForm from '../../components/chat/LoginForm';


import './Chat.css';

const Chat = () => {
   if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <div className='Chat'>
        <ChatEngine
            height="70vh"
            projectID="1c809c44-de51-423c-8f25-20172c711d83"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
        </div>
    );
}

export default Chat;
