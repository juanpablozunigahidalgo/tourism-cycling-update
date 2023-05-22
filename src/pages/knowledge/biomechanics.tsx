import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Biomechanics = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
        color="#142952"
        fontFamily="Consolas" 
      >
        <Header />
        <div className="recomendedmain">
        <h1>Biomechanics</h1>
            <p>General:</p>
            <p style={{ marginTop: '10px' }}><a className="linkdata" href="https://www.youtube.com/watch?v=IPmy2juxv2k">[1]Biomechanical body function cycling.</a></p>
			<p><a className="linkdata" href="https://www.youtube.com/watch?v=adAvHuSc2v4">[2]Biomechanics of cycling 1.</a> </p>
			<p><a className="linkdata" href="https://www.youtube.com/watch?v=RqzH4XXjL6w">[2.1]Biomechanics of cycling 2.</a></p>
			<p><a className="linkdata" href="https://www.youtube.com/watch?v=3qyoVGkPQF4">[3]Biomechanics of cyling resume.</a></p>
			<p><a className="linkdata" href="https://www.slideshare.net/OmarGatti/introduction-to-cycling-biomechanics">[3.1]Biomechanics slides resume.</a></p>
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Biomechanics;
