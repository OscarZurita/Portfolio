import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Name from './Name';
import LanguageButton from './LanguageButton';

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }}>
          <Name />
        </Box>
        <Box>
          <LanguageButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 