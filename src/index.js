import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvidor from './Context/AuthContext';
import { ChatContextProvider } from './Context/ChatContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvidor>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvidor>
);
