import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, GlobalStyles } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
});

const globalStyles = {
  'html, body, #root': {
    backgroundColor: '#1a1a1a',
    minHeight: '100%',
    margin: 0,
    padding: 0,
  },
  body: {
    overflow: 'auto',
  },
};

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
