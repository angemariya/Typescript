import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { state } from './state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App {...state} />
{/* <App todos = {state.todos} inputValue={state.inputValue}/>*/}
  </React.StrictMode>
);

reportWebVitals();
