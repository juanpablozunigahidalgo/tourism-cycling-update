import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import SearchForm from '../components/inputmap/inputmapb';
import Mapdisplay from '../components/inputmap/mapdisplay';





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
        <SearchForm></SearchForm>
        <Mapdisplay></Mapdisplay>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Routecost;