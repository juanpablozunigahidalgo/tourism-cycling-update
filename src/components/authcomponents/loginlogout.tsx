import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button style={{
        color: 'white',
          backgroundColor: '#142952',
          marginRight: '4rem',
          fontFamily: 'Consolas',
          border: 'none',
          borderRadius: '3px',
          width: '110px',
          height: '40px'
        }} onClick={isAuthenticated ? handleLogout : handleLogin}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;