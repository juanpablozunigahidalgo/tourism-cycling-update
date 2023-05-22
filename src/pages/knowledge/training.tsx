import '../../App.css';
import './localstyle.scss'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../styles/main/typography';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Training = (): JSX.Element => {
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
        <h1>Training</h1>
            <p>Why training or cycling is good:</p>
            <p style={{ marginTop: '10px' }}><a className="linkdata" href="https://www.health.harvard.edu/staying-healthy/the-top-5-benefits-of-cycling">[1]5 Benefits for humans.</a> </p>
							<p><a className="linkdata" href="https://www.researchgate.net/publication/51054095_Health_benefits_of_cycling_A_systematic_review">[2]Systematic review. Benefits in humans.</a> </p>
							<p><a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/25829377/">[3]Cycling is good for your brain.</a></p>
							<p><a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/8947395/">[4]Cycling training avoids overuse injuries.</a></p>
							<p><a className="linkdata" href="https://library.oapen.org/bitstream/handle/20.500.12657/32940/586710.pdf?sequence=1#page=64">[5]It is good for society and lower emisions.</a></p>
            <p>Training methods and its principles in cycling:</p>
            <p><a className="linkdata" href="https://en.wikipedia.org/wiki/VO2_max">[1]Vo2 explained simple. Why it is important. </a></p>
							<p><a className="linkdata" href="https://www.google.com/search?safe=strict&amp;tbm=bks&amp;q=Cycling+training+method&amp;oq=Cycling+training+method">[2]How to prepare for a long tour.</a></p>
							<p><a className="linkdata" href="https://www.adventurecycling.org/blog/how-to-train-for-your-tour/">[2]How to prepare for a long tour. Simple.</a></p>
							<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6722762/">[3]Indoor training helps.</a></p>
							<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5350167/">[4]Strenght training helps.</a></p>
							<p><a className="linkdata" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5889786/">[4]Strenght training helps 2.</a></p>
							<p><a className="linkdata" href="https://pubmed.ncbi.nlm.nih.gov/25892654/">[4]Strenght training helps 3.</a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=P1j1j0ttVPU">[5]Technique training 1. </a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=OhufNicwq8M">[5.1]Technique training 2. </a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=DRniqJXEeXw">[5.2]Technique training 3. </a></p>
							<p><a className="linkdata" href="https://www.youtube.com/watch?v=zdEepaGQqwk">[5.3]Technique training 3. </a></p>
							<p><a className="linkdata" href="https://www.peoplepoweredmovement.org/10-ways-to-stay-safe-while-cycling/">[6]Keep in mind to avoid accidents.</a></p>
							<p><a className="linkdata" href="https://www.polar.com/blog/how-to-prepare-for-a-marathon-mentally/">[7]Mental training for long and continuous effort.</a></p>
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Training;










