import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //removed <React.StrictMode> because it was causing errors i.e. TypeError: Cannot read properties of undefined (reading 'dispose')
    <App />
);

serviceWorker.register();