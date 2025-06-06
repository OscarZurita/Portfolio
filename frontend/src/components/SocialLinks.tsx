import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconBaseProps } from 'react-icons';

const SocialLinks = () => {
  const iconProps: IconBaseProps = {
    style: { fontSize: '1.5rem' }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      sx={{
        display: 'flex',
        gap: 2,
        mt: 4,
      }}
    >
      <IconButton
        component="a"
        href="https://github.com/OscarZurita"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'white',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {FaGithub(iconProps)}
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/óscar-zurita-urpina-019b52134/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'white',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {FaLinkedin(iconProps)}
      </IconButton>
    </Box>
  );
};

export default SocialLinks; 