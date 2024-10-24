import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        {/* Logo and Tamadon Text */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src="your-logo-url" alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tamadon
          </Typography>
        </Box>

        {/* Options for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* Hamburger Menu for smaller screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
            <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
