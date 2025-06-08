import React from 'react';
import { Button } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Button
      onClick={toggleLanguage}
      sx={{
        color: '#ffffff',
        border: '1px solid #ffffff',
        borderRadius: 0,
        fontFamily: 'monospace',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: '1px solid #ffffff',
          color: '#000000'
        },
      }}
    >
      {t.language}
    </Button>
  );
};

export default LanguageButton; 