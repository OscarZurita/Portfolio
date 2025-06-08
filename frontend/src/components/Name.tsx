import React from 'react';
import { Typography } from '@mui/material';

const Name: React.FC = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        color: '#ffffff',
        fontFamily: 'monospace',
        lineHeight: 1.6,
      }}
    >
      {'Óscar Zurita Urpina'}
    </Typography>
  );
};

export default Name; 