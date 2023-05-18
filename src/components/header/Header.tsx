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
          <Button color="inherit" sx={{ color: 'white', backgroundColor: '#142952', marginRight: '4rem' }}>Login</Button>
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
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Route & Cost Calculator</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Equipment Calculator</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Preparation</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Bike Check</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Knowledge</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Recomended Apps</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#142952' }}>Profile</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;