/*import { useState } from 'react';
import axios from 'axios';

const projectID = 'bb7480a5-309a-4bd8-9f20-2b5f78b19f99'; 

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': setUsername, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
          setError('Username: user123  Password: password123');
        } 
    };

    return (
      <div className="wrapper">
          <div className="form">
              <h1 className="title">Memo</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                  <div align="center">
                      <button type="submit" className="button"> 
                          <span>Start Chatting</span>
                      </button>
                  </div>
              </form>
              <h1>{error}</h1>
          </div>
      </div>
    );
};

export default Modal;
*/