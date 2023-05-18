import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

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

const Preparation = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
        color="#142952"
      >
        <Header />
        <div style={styles.textDiv}>
          <h1 style={styles.title}>Preparation</h1>
        </div>  
				<div style={{ marginLeft: '5%', fontFamily: 'Consolas' }}>
            <p style={{ marginBottom: '1em' }}>
              Every healthy person should be able to ride long routes. At the same time. Many riders suffer overuse injuries in the joins. The golden rule is to ride without exceeding your own limits. If you are planning to have a long trip for many years. There is no need to train in advance. As long as you start your journey with a progressive work load.
            </p>
            <p style={{ marginBottom: '1em' }}>
              Most touring riders take trips up till 3 months. But keep in mind that to achieve good and sustainable cycling performance, that last for many days in continuous effort, a progressive training is needed. Also. A training program allows to heavily decrease the chance to have an <a href="https://www.aspetar.com/journal/viewarticle.aspx?id=339#.YBHEh-j0mp4">overuse injury during the trip.</a>
            </p>
            <p style={{ marginBottom: '1em' }}>
              During the trip. We recommend a daily distance about 50-60 km/day. Since allows your body to recover. As well. To have time for other activities across the route. Such as swim, sauna, or just enjoying the view. Some dudes can manage 100 km per day. But then time only is for cycling.
            </p>
            <p style={{ marginBottom: '1em' }}>
              Here you can find a 12 Week preparation program. While total Kilometer per week is calculated based on the ideal day distance. Which is 60 km/day. For 4 days a week. Which leads to a total per week of 240 kilometers. In 12 weeks everyone can make it.
            </p>
        </div>		
              <div>
                  <iframe
                    width="680"
                    height="420"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT6wGlk9fhJu083crDy7n8F7lEi9JTJuttlV-m0HB7_mim0f_z7fPRk8tNo7f9U-3mbAIyxTXEHqXiv/pubchart?oid=17584792&amp;format=interactive"
                  ></iframe>
              </div>

         <div style={{ marginLeft: '5%', fontFamily: 'Consolas' }}>
              <p style={{ marginBottom: '1em' }}>
                Usually in the gym you can use Spinning machines. In which you can regulate the WATT output depending on your physical effort. Which leads to rolling resistance change. A normal human being is able to give an output of about 2-3 watt per kg Body weight. Usually, you might target 100-150 watt in such training.
              </p>
              <p style={{ marginBottom: '1em' }}>
                As well, keep in mind that on the tour route, you will be pulling high load, hence higher torque. Also, climbing slopes. In that concern, it is also a good idea to try cycling with weight on your bike, perhaps during week 9-12. (Graph above.)
              </p>
        </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Preparation;