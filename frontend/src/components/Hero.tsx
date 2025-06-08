import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Navbar from './Navbar';
import Skills from './Skills';

const Hero = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const { scrollYProgress } = useScroll();
  
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const skillsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const skillsY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);

  return (
    <Box
      sx={{
        minHeight: '190vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#1a1a1a',
        color: '#ffffff',
        position: 'relative'
      }}
    >
      <Navbar />
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <Grid item xs={12}>
            <motion.div
              style={{
                opacity: titleOpacity,
                y: titleY,
              }}
            >
              <Box
                sx={{
                  p: 4,
                  mb: 4,
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '5rem', md: '8.5rem' },
                    mb: 4,
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    mt: 2,
                    textAlign: 'center',
                    fontWeight: 900,
                    lineHeight: 1.2,
                  }}
                >
                  {t.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    lineHeight: 1.6,
                    textAlign: 'center',
                  }}
                >
                  {'>'} {t.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <motion.div
        style={{
          opacity: skillsOpacity,
          y: skillsY,
        }}
      >
        <Container>
          <Skills />
        </Container>
      </motion.div>

      <Box
        sx={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          p: 2,
          zIndex: 1000,
        }}
      >
        <SocialLinks />
      </Box>
    </Box>
  );
};

export default Hero; 