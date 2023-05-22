import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Nutrition = (): JSX.Element => {
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
        <h1>Nutrition</h1>
            <p>Daily energy required:</p>
            <p style={{ marginTop: '10px' }}><a className="linkdata" href="https://www.calculator.net/bmr-calculator.html">[1]Your diet should at least cover this amount of energy.</a> </p>
			<p><a className="linkdata" href="https://keisan.casio.com/exec/system/1350958587">[2]Mind the energy spend in the route.</a> </p>
            <p>Nutrition:</p>
                <p><a className="linkdata" href="https://www.britishcycling.org.uk/sportives/article/sp-Sportive-Tips---What-to-eat-during-training-0">[1]Eating during trainning season.</a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4540168/">[2]Food strategy for sport performance. </a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6090881/">[3]General review on nutrition in sports. </a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7279379/">[4]Good eating habits are better than supplements.</a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7468744/">[5]Nutrition in rehabilitation.</a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6389634/">[6]Personalized nutrition.</a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4404129/">[7]Knowledge is linked to better nutrition. </a></p>
				<p><a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/31696454/">[8]Bone health and nutrition.</a></p>
				<p><a className="linkdata" href="https://www.researchgate.net/publication/8494994_Fluids_and_hydration_in_prolonged_endurance_performers">[9]Hydration in prolonged endurance performers.</a></p>
				<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3418934/">[10]Hydration in marathon.</a></p>
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Nutrition;
