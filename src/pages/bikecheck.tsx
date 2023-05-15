import '../App.css';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import theme from '../styles/main/typography';
import Header from '../components/header/header';
import Pagetitle from '../components/pagetitle/pagetitle';
import Footer from '../components/footer/footer';
import Box1 from '../components/matrix/box1';


const Bikecheck = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="60vh"
      >
        <Header />
        <div id="main">
      <div className="inner">
        <h1>Bike Check</h1>

        <p style={{ marginBottom: '2.5em' }}>
          In touring cycling. A bike that is reliable and adaptable to all terrain is required. Here a frame work to decide if
          your bike is suitable for this adventure. Usability check:
        </p>
        <input type="checkbox" id="prop8" name="option8" value="ok" />
        <label htmlFor="prop8">The bike frame is suitable for my height [See below Calculator]</label>
        <br />
        <input type="checkbox" id="prop1" name="option2" value="ok" />
        <label htmlFor="prop1">
          I can climb a <a href="https://www.google.com/search?tbm=isch&q=heavy+slope+cycling">heavy slope</a> with that bike without much effort or RPM
        </label>
        <br />
        <input type="checkbox" id="prop2" name="option2" value="ok" />
        <label htmlFor="prop2">I can ride the bicycle at fast speeds without many RPM.</label>
        <br />
        <input type="checkbox" id="prop3" name="option3" value="ok" />
        <label htmlFor="prop3">
          I can install a <a href="https://www.google.com/search?tbm=isch&q=bicycle+rear+rack+20+kg">rack</a> either{' '}
          <a href="https://www.google.com/search?tbm=isch&q=bike+packing+configuration">bike packing configuration</a> on that bike.
        </label>
        <br />
        <input type="checkbox" id="prop4" name="option4" value="ok" />
        <label htmlFor="prop4">I know that the bike is high quality. Either reliable.</label>
        <br />
        <input type="checkbox" id="prop5" name="option5" value="ok" />
        <label htmlFor="prop5">I can brake fast and easily.</label>
        <br />
        <input type="checkbox" id="prop6" name="option6" value="ok" />
        <label htmlFor="prop6">I can shift gears fast and easily.</label>
        <br />
        <input type="checkbox" id="prop7" name="option7" value="ok" />
        <label htmlFor="prop7">The wheels are suitable for all types of terrains.</label>
        <br />
        <p style={{ marginBottom: '0.5em', marginTop: '1em' }}>
          In case your bike does not meet these characteristics. We recommend the following bikes:{' '}
          <a href="https://www.decathlon.co.uk/p/touring-bike-riverside-touring-520/_/R-p-312723">Bike1</a>.{' '}
          <a href="https://www.trekbikes.com/us/en_US/bikes/adventure-touring-bikes/1120/1120/p/33304/">Bike2</a>.{' '}
          <a href="https://www.trekbikes.com/us/en_US/us/en_US/bikes/adventure-touring-bikes/520/520-disc/p/24000/">Bike3</a>.
        </p>
        <p style={{ marginBottom: '0.5em' }}>Here are some tools to check/select your bike:</p>
        <div>
          <p style={{ marginBottom: '0.5em' }}>
            [1] Frame size. This is extremely important since the bike must fit your body to avoid non-recommendable biomechanical
            movements and therefore injuries.
          </p>
          <div style={{ width: '50%' }}>
            <div
              className="omni-calculator"
              data-calculator="sports/bike-size"
              data-width="300"
              data-config='{}'
              data-currency="SEK"
              data-show-row-controls="false"
              data-version="3"
              data-t="1607859562745"
            >
              <div className="omni-calculator-header">Bike Size Calculator</div>
              <div className="omni-calculator-footer">
                <a href="https://www.omnicalculator.com/sports/bike-size" target="_blank">
                  <img alt="Omni" className="omni-calculator-logo" src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg" />
                </a>
              </div>
            </div>
            <script async src="https://cdn.omnicalculator.com/sdk.js"></script>
          </div>
          <p style={{ marginBottom: '0.5em', marginTop: '0.5em' }}>
            [2] Gear ratio. Your gear ratio gain should be higher than 1.6. This will allow you to climb steep slopes.
          </p>
          <div style={{ width: '50%' }}>
            <div
              className="omni-calculator"
              data-calculator="sports/bike-gear-calculator"
              data-width="300"
              data-config='{}'
              data-currency="SEK"
              data-show-row-controls="false"
              data-version="3"
              data-t="1607860391827"
            >
              <div className="omni-calculator-header">Bike Gear Calculator</div>
              <div className="omni-calculator-footer">
                <a href="https://www.omnicalculator.com/sports/bike-gear-calculator" target="_blank">
                  <img alt="Omni" className="omni-calculator-logo" src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg" />
                </a>
              </div>
              </div>
              <script async src="https://cdn.omnicalculator.com/sdk.js"></script>
            </div>
            </div>
            </div>
          </div>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Bikecheck;