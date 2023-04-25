import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Container from '@mui/material/Container';
import ImageSection from './components/imagesection/imagesection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <ImageSection />
      </Container>
      <Footer />
    </>
  );
};

export default App;