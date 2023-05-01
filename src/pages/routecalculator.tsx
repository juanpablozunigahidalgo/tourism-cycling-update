import '../App.css';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import InputMapStart from '../components/inputmap/inputmap';
import SearchForm from '../components/inputmap/inputmapp';





const Routecost = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAl-NAQCJ332WGr3zqsAwvTmf5z8O88zrA&libraries=places"></script>

      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <Pagetitle></Pagetitle>
        <SearchForm></SearchForm>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Routecost;