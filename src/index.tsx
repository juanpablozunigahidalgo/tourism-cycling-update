import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactGA from 'react-ga';

ReactGA.initialize("G-Z4K92B80V1");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
      <React.StrictMode>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
