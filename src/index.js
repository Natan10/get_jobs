import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/global.css';
import JobContextProvider from './jobContext/JobsContext';

ReactDOM.render(
  <React.StrictMode>
    <JobContextProvider>
      <App />
    </JobContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

