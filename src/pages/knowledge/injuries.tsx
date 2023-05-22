import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Injuries = (): JSX.Element => {
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
        <h1>Injuries</h1>
            <p>Types:</p>
            <p style={{ marginTop: '10px' }}>
            <a className="linkdata" href="https://journals.sagepub.com/doi/10.1177/036354658501300308">
            [1] Most common types of injuries in touring cycling.
            </a>
            </p>
            <p>
              <a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6124184/#:~:text=The%20most%20common%20injury%20leading,the%20most%20commonly%20fractured%20bone.">
                [2] Type of injuries in tour de france.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://bodytonicclinic.co.uk/common-cycling-injuries/">
                [3] Common cycling injuries.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/21615188/">
                [4] Effects of bicycle saddle height on knee injury risk and cycling performance.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://journals.lww.com/jaaos/Fulltext/2007/12000/Cycling_Injuries_of_the_Lower_Extremity.8.aspx">
                [5] Cycling Injuries of the Lower Extremity.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/8947395/">
                [6] Amateur long tour cycle injury predictors.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://mendmyknee.com/knee-and-patella-injuries/cyclists-knee-pain-patellofemoral-syndrome.php">
                [7] Knee pain.
              </a>
            </p>
            <p style={{ marginTop: '10px' }}>Prevention:</p>
            <p>
              <a className="linkdata" href="https://journals.lww.com/acsm-csmr/fulltext/2016/05000/prevention,_evaluation,_and_rehabilitation_of.18.aspx">
                [1] Prevention, evaluation and rehabilitation.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://journals.lww.com/acsm-csmr/_layouts/15/oaks.journals/ImageView.aspx?article=00018&amp;i=T1-18&amp;issue=05000&amp;k=acsm-csmr:2016:05000:00018&amp;type=Fulltext&amp;year=2016">
              [2] Root injury cause table.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://www.omnicalculator.com/sports/bike-size">
              [3] Right frame size.
              </a>
            </p>
            <p>
              <a className="linkdata" href="https://www.bikeradar.com/advice/fitness-and-training/how-to-get-your-bike-saddle-height-right/">
                [4] Right saddle height.
              </a>
            </p>
            <p>
            <a className="linkdata" href="https://www.youtube.com/watch?v=hSgrRUVE9AM">[5] Overuse Injury prevention in cycling.</a>
            </p>
        </div>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Injuries;

