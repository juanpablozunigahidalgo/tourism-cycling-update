import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Formequipment from '../components/equipmentengine/equipmentengine';

const styles = {
  textDiv: {
    color: '#142952',
    backgroundColor: 'white',
    paddingLeft: '4rem',
    fontFamily: 'Consolas',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '2%',
  },
};



const Equipment = (): JSX.Element => {
  return (

    <ThemeProvider theme={theme}> 
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <div style={styles.textDiv}>
          <h1 style={styles.title}>Equipment calculator</h1>
          {/* <h3 style={styles.subtitle}>Tools for touring cyclists.</h3> */}
        </div>
        <Formequipment></Formequipment>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Equipment;
