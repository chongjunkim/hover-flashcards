import React from 'react';
import ReactDOM from 'react-dom/client';  // <-- Import from 'react-dom/client'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));  // <-- Use createRoot
root.render(<App />);

registerServiceWorker();
