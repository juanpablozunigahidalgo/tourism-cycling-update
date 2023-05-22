import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Bikemechanics = (): JSX.Element => {
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
        <h1>Bike Mechanics</h1>
            <p>General:</p>
            <p style={{ marginTop: '10px' }}><a className="linkdata" href="https://www.researchgate.net/publication/51167758_Effects_of_Bicycle_Saddle_Height_on_Knee_Injury_Risk_and_Cycling_Performance	">[1]Frame size.</a></p>
				<p><a className="linkdata" href="https://www.omnicalculator.com/sports/bike-size">[1.2]Choose the right frame size. </a></p>
				<p><a className="linkdata" href="https://www.cyclingabout.com/mechanical-or-hydraulic-disc-brakes-on-touring-bikepacking-bikes/">[2]Best brake type.</a></p>
				<p><a className="linkdata" href="https://www.bikeradar.com/advice/buyers-guides/buyers-guide-to-touring-wheels/">[3]Ideal wheel type.</a></p>
				<p><a className="linkdata" href="https://www.bicycling.com/bikes-gear/a23490923/best-touring-bikes/">[4]Ideal bike type.</a></p>
				<p><a className="linkdata" href="https://www.sheldonbrown.com/rinard/aero/formulas.html">[5]Aerodynamics.</a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch?v=XagSFU7gMLY">[5.1]Aerodynamics explained simple.</a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch?v=Ue_Tz7e0DmE">[5.1]Aerodynamics touring cycling applied.</a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch/49DxlXs8tyk">[6]Gear ratio explained simple.</a></p>
				<p><a className="linkdata" href="https://www.cyclingabout.com/gear-ratios-how-to-select-touring-bike-gearing/">[6.1]Ideal gear ratio in Touring cyling.</a></p>
				<p><a className="linkdata" href="https://www.sheldonbrown.com/repairs.html">[7]Bicycle maintenance.</a></p>
				<p><a className="linkdata" href="https://bicycles.stackexchange.com/questions/23380/why-top-touring-bikes-have-no-suspension-forks">[7]Mountain Bike Suspension in touring cycling?.</a></p>
				<p><a className="linkdata" href="https://bikeandmore.biz/tips-and-advices-for-bicycle-maintenance/">[8]Clean and storage your bike. </a></p>
				<p><a className="linkdata" href="https://www.bicycling.com/repair/a20033964/bike-washing-mistakes/">[8.1]Cleaning mistakes. </a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch?v=yjuKatMkIkA">[8.1]Cleaning like a pro. </a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch?v=4sDX54zNmxY">[9]Right tire pressure. </a></p>
				<p><a className="linkdata" href="https://www.youtube.com/watch?v=CoABOk_8KH8">[9.1] Save 77 watts. </a></p>
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Bikemechanics;

