import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
//Lets try authenticated header
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../authcomponents/login';
import LogoutButton from '../authcomponents/logout';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from '../authcomponents/profile';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user, isLoading } = useAuth0();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
          <Auth0Provider
            domain="dev-gpo5cpbi6qdl5wsj.us.auth0.com"
            clientId="GQPX7QNdmzUXXu9umA78OepNI5yykjcw"
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >
          <div className="login">
              {!isAuthenticated ? (
                <div>
                  <LoginButton />
                </div>
              ) :
                <div>
                <LogoutButton />    
                </div>}
            </div>
          {/* <Button color="inherit" sx={{ color: 'white', backgroundColor: '#142952', marginRight: '4rem' }}>Login</Button> */}
          </Auth0Provider>   
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: '#142952' }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{ right: 0 }}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose} sx={{ color: '#142952' }}>Home</MenuItem>
          <MenuItem component={Link} to="/route" onClick={handleMenuClose} sx={{ color: '#142952' }}>Route & Cost Calculator</MenuItem>
          <MenuItem component={Link} to="/equipment" onClick={handleMenuClose} sx={{ color: '#142952' }}>Equipment Calculator</MenuItem>
          <MenuItem component={Link} to="/preparation" onClick={handleMenuClose} sx={{ color: '#142952' }}>Preparation</MenuItem>
          <MenuItem component={Link} to="/bikecheck" onClick={handleMenuClose} sx={{ color: '#142952' }}>Bike Check</MenuItem>
          <MenuItem component={Link} to="/knowledge" onClick={handleMenuClose} sx={{ color: '#142952' }}>Knowledge</MenuItem>
          <MenuItem component={Link} to="/recomended" onClick={handleMenuClose} sx={{ color: '#142952' }}>Recommended Apps</MenuItem>
          <MenuItem component={Link} to="/" onClick={handleMenuClose} sx={{ color: '#142952' }}>Profile</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;