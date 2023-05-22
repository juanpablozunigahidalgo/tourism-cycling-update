import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Accidentsandprevention = (): JSX.Element => {
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
        <h1>Accidents and prevention</h1>
            <p>Accidents statistics:</p>
            <p style={{ marginTop: '10px' }}><a className="linkdata" href="https://www.iihs.org/topics/fatality-statistics/detail/bicyclists#when-they-died">[1]US cycling accidents statistics deaths.</a> </p>
							<p><a className="linkdata" href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812765">[2]2017 American cycling deaths statistics.</a> </p>
							<p><a className="linkdata" href="https://ec.europa.eu/transport/road_safety/sites/roadsafety/files/pdf/statistics/dacota/bfs20xx_cyclists.pdf">[3]Europe cycling fatalities statistics.</a></p>
							<p><a className="linkdata" href="https://www.cpsc.gov/s3fs-public/BicycleInjuriesSeeninHospitalEmergencyDepartments2013.pdf">[4]Helmet use decreases head emergency injury by 54%.</a></p>
							<p><a className="linkdata" href="https://www.diva-portal.org/smash/get/diva2:242509/FULLTEXT01.pdf">[5]Helmet and death prevention mission in Sweden.</a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=skzmeqPbSUY">[6]Video brain tissue stress helmet vs no helmet.</a></p>
							<p><a className="linkdata" href="https://orbit.dtu.dk/files/163241421/Contribution_10529_fullpaper.pdf">[7]Cyclist contribution behavior in accidents. Denmark statistics.</a></p>
							<p><a className="linkdata" href="https://en.wikipedia.org/wiki/Bicycle_helmet#Compulsory_helmet_use_in_cycling_sport">[8]History of helmet usability in cycling.</a></p>
            <p>Prevention:</p>
                            <p><a className="linkdata" href="https://www.nhtsa.gov/road-safety/bicyclists">[1]Prevention of accidents US.</a></p>
							<p><a className="linkdata" href="https://www.sciencedirect.com/science/article/pii/S0386111217300018#ab0005">[2]Bicycling practices associated with reduced involvement in traffic accidents.US. </a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=MRzocGhHJWw">[3]How not to die in an cycling accident. </a></p>
							<p><a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/1587566/">[4]Kids prevention.</a></p>  
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Accidentsandprevention;


















