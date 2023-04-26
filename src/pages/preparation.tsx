import '../App.css';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import Box1 from '../components/matrix/box1';


const Home = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <Pagetitle></Pagetitle>
        <Box flexGrow={1}>
          <Container maxWidth="lg">
            <Box1></Box1>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;