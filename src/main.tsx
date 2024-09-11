import React from 'react';
import ReactDOM from 'react-dom'; // Use react-dom instead of react-dom/client
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}
