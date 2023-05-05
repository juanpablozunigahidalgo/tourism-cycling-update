import '../App.css';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitler from '../components/pagetitle/pagetitleequipment';
import Footer from '../components/footer/footer';
import Formequipment from '../components/equipmentengine/equipmentengine';



const Equipment = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <Pagetitler></Pagetitler>
        <Formequipment></Formequipment>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Equipment;