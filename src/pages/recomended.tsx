import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import RecommendedApps from '../components/recomended/recomended';


const Recomended = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <RecommendedApps></RecommendedApps>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Recomended;