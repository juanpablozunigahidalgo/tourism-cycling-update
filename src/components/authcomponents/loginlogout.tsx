import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        console.log("it is autenticated");
        console.log(accessToken);
        if (accessToken) {
          setIsLoggedIn(true);
        }
      }
    };

    checkAuthentication();
  }, [isAuthenticated, getAccessTokenSilently]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button
      style={{
        color: 'white',
        backgroundColor: '#142952',
        marginRight: '4rem',
        fontFamily: 'Consolas',
        border: 'none',
        borderRadius: '3px',
        width: '110px',
        height: '40px'
      }}
      onClick={isLoggedIn ? handleLogout : handleLogin}
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;