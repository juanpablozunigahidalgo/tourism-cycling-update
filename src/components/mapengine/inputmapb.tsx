import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import Mapdisplay from './mapdisplay';
import DistanceCalculator from './distanceengine';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Props {}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: 'black', // Change input text color
          },
          '& .MuiInputLabel-root': {
            color: 'black', // Change input label color
            '&.Mui-focused': {
              color: 'black', // Change input label color on focus
            },
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black', // Change border color on focus
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '&:hover:not(.Mui-disabled):before': {
            borderColor: 'black', // Change select menu border color on hover
          },
          '&:before': {
            borderColor: 'black', // Change select menu border color
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black', // Change border color on focus
          },
        },
        icon: {
          color: 'black', // Change select menu icon color
        },
      },
    },
  },
});


const SearchForm: React.FC<Props> = () => {
  const [initialAddress, setInitialAddressState] = useState<string>('');
  const [destinationAddress, setDestinationAddressState] = useState<string>('');
  const [travelingMode, setTravelingModeState] =  useState<google.maps.TravelMode>(google.maps.TravelMode.DRIVING)
  const [estimatedAverageSpeed, setEstimatedAverageSpeed] = useState(0);
  const [estimatedHoursPerDayCycling, setEstimatedHoursPerDayCycling] = useState(0);
  const [restingDays, setRestingDays] = useState(0);
  const [budgetPerDay, setBudgetPerDay] = useState(0);

  const handleSearch = () => {
    console.log(initialAddress);
    console.log(destinationAddress);
    console.log(travelingMode); 
  };

  const handlePlaceSelect = (
    address: string,
    isInitialAddress: boolean
  ) => {
    isInitialAddress
      ? setInitialAddressState(address)
      : setDestinationAddressState(address);
  };

  const initAutocomplete = (
    input: HTMLInputElement,
    isInitialAddress: boolean
  ) => {
    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      types: ['geocode'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.formatted_address) {
        console.error('Invalid place object returned from Google Maps API');
        return;
      }

      handlePlaceSelect(place.formatted_address, isInitialAddress);
    });
  };

  const handleInitialAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInitialAddressState(event.target.value);
  };

  const handleDestinationAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestinationAddressState(event.target.value);
  };

  const handleTravelModeChange = (value: any) => {
    setTravelingModeState(value);
  };

  const handleEstimatedAverageSpeedInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstimatedAverageSpeed(parseFloat(event.target.value));
  };

  const handleEstimatedHoursPerDayCyclingInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstimatedHoursPerDayCycling(parseFloat(event.target.value));
  };

  const handleRestingDaysInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestingDays(parseInt(event.target.value));
  };

  const handleBudgetPerDayInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetPerDay(parseFloat(event.target.value));
  };

  return (
    <><div
          style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              maxWidth: '500px',
              minHeight: '200px',
          }}
      >
          <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
              <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextField
                      id="initialAddress"
                      label="Initial Address"
                      variant="outlined"
                      fullWidth
                      value={initialAddress}
                      onChange={handleInitialAddressInputChange}
                      inputRef={(input) => input && initAutocomplete(input, true)}
                      style={{ marginBottom: '1rem' }} />
                  <TextField
                      id="destinationAddress"
                      label="Destination Address"
                      variant="outlined"
                      fullWidth
                      value={destinationAddress}
                      onChange={handleDestinationAddressInputChange}
                      style={{ marginBottom: '1rem' }}
                      inputRef={(input) => input && initAutocomplete(input, false)} />
                  <TextField
                    id="estimatedAverageSpeed"
                    label="Estimated average speed"
                    variant="outlined"
                    placeholder="enter in km/h"
                    fullWidth
                    type="number"
                    value={estimatedAverageSpeed === 0 ? '' : estimatedAverageSpeed}
                    onChange={handleEstimatedAverageSpeedInputChange}
                    style={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    id="estimatedHoursPerDayCycling"
                    label="Estimated hours per day cycling"
                    placeholder="enter hours/day"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={estimatedHoursPerDayCycling === 0 ? '' : estimatedHoursPerDayCycling}
                    onChange={handleEstimatedHoursPerDayCyclingInputChange}
                    style={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    id="restingDays"
                    label="Resting days"
                    variant="outlined"
                    placeholder="enter in days"
                    fullWidth
                    type="number"
                    value={restingDays === 0 ? '' : restingDays}
                    onChange={handleRestingDaysInputChange}
                    style={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    id="budgetPerDay"
                    label="Your budget per day"
                    placeholder="enter in usd/day"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={budgetPerDay === 0 ? '' : budgetPerDay}
                    onChange={handleBudgetPerDayInputChange}
                    style={{ marginBottom: '1rem' }}
                  />
                  <Select
                      labelId="Travellin Mode"
                      id="Traveling"
                      value={travelingMode}
                      onChange={(e) => handleTravelModeChange(e.target.value)}
                      label="Travel Mode"
                      variant="outlined"
                      fullWidth
                      style={{ marginBottom: '0rem' }}
                  >
                      <MenuItem value={google.maps.TravelMode.DRIVING}>Driving</MenuItem>
                      <MenuItem value={google.maps.TravelMode.BICYCLING}>Cycling</MenuItem>
                      <MenuItem value={google.maps.TravelMode.WALKING}>Walking</MenuItem>
                  </Select>
              </Grid>
              {/* <Grid item xs={12}>
                  <Button
                      variant="contained"
                      style={{ backgroundColor: 'gray', color: 'black', maxWidth: '200px' }}
                      onClick={handleSearch}
                  >
                      Search
                  </Button>
              </Grid> */}
          </Grid>
          </ThemeProvider>
      </div>
      <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
      <DistanceCalculator initialAddress={initialAddress} destinationAddress={destinationAddress} travelingMode={travelingMode} estimatedAverageSpeed={estimatedAverageSpeed} estimatedHoursPerDayCycling={estimatedHoursPerDayCycling} restingDays={restingDays} budgetPerDay={budgetPerDay} ></DistanceCalculator>    
      </div>
      <div>
      <Mapdisplay initialAddress={initialAddress} destinationAddress={destinationAddress} travelingMode={travelingMode} ></Mapdisplay>
      </div>
      </>
  );
};

export default SearchForm;
