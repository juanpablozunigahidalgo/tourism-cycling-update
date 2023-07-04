import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Profile from '../components/authcomponents/profile';

const styles = {
  textDiv: {
    color: '#142952',
    backgroundColor: 'white',
    paddingLeft: '4rem',
    fontFamily: 'Consolas',
    maxWidht: '100%'
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

const Profilepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
        color="#142952"
      >
        <Header />
        <div style={{ maxWidth: '100%', marginRight:'5%'}} >
              <div style={styles.textDiv}>
                <h2 style={styles.title} >Profile Page</h2>
              </div>  
              <div style={{ marginLeft: '5%', fontFamily: 'Consolas' }}>
              <Profile/>
              </div>		
              
        </div>            
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Profilepage;