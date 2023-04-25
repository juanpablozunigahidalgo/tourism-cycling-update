import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import ImageSection from './components/imagesection/imagesection';

import Footer from './components/footer/footer';
import Header from './components/header/header';


import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './styles/main/typography';
import Box from '@mui/material/Box';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Header />
        <Box flexGrow={1}>
          <Container maxWidth="lg">
            <ImageSection />
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;