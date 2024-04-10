import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="730150862870-mrri7emp03n2u22qctvhtlavhfmf1fmv.apps.googleusercontent.com"> 
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
