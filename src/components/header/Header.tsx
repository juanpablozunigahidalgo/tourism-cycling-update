import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
          <Button color="inherit" sx={{ color: 'black', backgroundColor: '#EEEEEE', marginRight: '4rem' }}>Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: 'black' }}
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
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Route & Cost Calculator</MenuItem>
          <MenuItem onClick={handleMenuClose}>Equipment Calculator</MenuItem>
          <MenuItem onClick={handleMenuClose}>Preparation</MenuItem>
          <MenuItem onClick={handleMenuClose}>Bike Check</MenuItem>
          <MenuItem onClick={handleMenuClose}>Knowledge</MenuItem>
          <MenuItem onClick={handleMenuClose}>Recomended Apps</MenuItem>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;