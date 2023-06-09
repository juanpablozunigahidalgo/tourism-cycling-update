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
      console.log("authenticated")
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      {user?.picture && (
        <img src={user.picture} alt="Profile Picture" />
      )}
      <h2>Hello {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Login Method: {user?.sub?.split('|')[0]}</p>
    </div>
  );
};

export default Profile;