import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { ReactSVG } from 'react-svg';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '2.9rem',
          color: '#ffffff',
          mb: 4,
        }}
      >
        {'>'} {t.skills}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#ffffff',
          mb: 4,
        }}
      >
        {t.skillsText}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={6} sm={4} md={3} key={skill.name}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: '4rem',
                  height: '4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': {
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    ...(skill.name === 'GitHub' && {
                      filter: 'invert(1)',
                    }),
                  },
                  '&:hover svg': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <ReactSVG
                  src={skill.logo}
                  beforeInjection={(svg) => {
                    svg.setAttribute('width', '4rem');
                    svg.setAttribute('height', '4rem');
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: '#ffffff',
                  textAlign: 'center',
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 