import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContext, AuthContextProvidor } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvidor>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvidor>
);
