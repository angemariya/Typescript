import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App'
import { createStore } from './connect';
import { composedReducers, initialState } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createStore(composedReducers, initialState);