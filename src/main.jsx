import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the correct import for ReactDOM
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react'; // Import StrictMode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
