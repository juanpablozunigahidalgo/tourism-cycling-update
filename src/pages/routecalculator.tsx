import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import SearchForm from '../components/inputmap/inputmapb';
import Mapdisplay from '../components/inputmap/mapdisplay';
import Titler from '../components/pagetitle/pagetitleroute';

const Routecost = (): JSX.Element => {
  return (
    
    <ThemeProvider theme={theme}> 
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <Titler></Titler>
        <SearchForm></SearchForm>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Routecost;