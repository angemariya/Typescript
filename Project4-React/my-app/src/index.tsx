import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { state } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App {...state} />
{/* <App todos = {state.todos} inputValue={state.inputValue}/>*/}
  </React.StrictMode>
);

