import '../App.css';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import InputMapStart from '../components/inputmap/inputmap';




const Routecost = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <Pagetitle></Pagetitle>
        <InputMapStart onPlaceSelected={function (place: google.maps.places.PlaceResult): void {
          throw new Error('Function not implemented.');
        } }></InputMapStart>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Routecost;