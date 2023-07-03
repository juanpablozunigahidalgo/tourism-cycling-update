import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{
    color: 'white',
      backgroundColor: '#142952',
      marginRight: '4rem',
      fontFamily: 'Consolas',
      border: 'none',
      borderRadius: '3px',
      width: '110px',
      height: '40px'
    }} onClick={() => loginWithRedirect()}>LogIn</button>;
};

export default LoginButton;