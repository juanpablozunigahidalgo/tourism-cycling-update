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

ReactGA.initialize("G-XBCX1RWVBF");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
        domain="dev-gpo5cpbi6qdl5wsj.us.auth0.com"
        clientId="GQPX7QNdmzUXXu9umA78OepNI5yykjcw"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <React.StrictMode>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
