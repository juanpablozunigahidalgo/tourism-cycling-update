import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      getAccessToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      <h2>Hello {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Login Method: {user?.sub?.split('|')[0]}</p>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default Profile;