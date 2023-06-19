import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components/App';
import { ThemeContainer } from './components/ThemeContainer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContainer>
      <App />
    </ThemeContainer>
  </React.StrictMode>
);

