import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  const handleClick = () => {
    window.location.href = '/';
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: '#000066'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Application
          </Typography>
          <Button color='inherit' onClick={handleClick} >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}