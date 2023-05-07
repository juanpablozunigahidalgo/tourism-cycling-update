//Imports required to run the code.
import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import * as casefunctions from './casefunctions';
//Critical interface to deal with functions.
interface FormState {
  tripLength: number;
  camping: number;
  minimumTripTemperature: number;
  rain: number;
}
//Styling
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: '#000000', // Change input text color
          },
          '& .MuiInputLabel-root': {
            color: '#000000', // Change input label color
            '&.Mui-focused': {
              color: '#000000', // Change input label color on focus
            },
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#000000', // Change border color on focus
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '&:hover:not(.Mui-disabled):before': {
            borderColor: '#000000', // Change select menu border color on hover
          },
          '&:before': {
            borderColor: '#000000', // Change select menu border color
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000000', // Change border color on focus
          },
        },
        icon: {
          color: '#000000', // Change select menu icon color
        },
      },
    },
  },
});
//Component function. Notice that the Form is a set of functions with state.
const Form = () => {
  const [formState, setFormState] = useState<FormState>({ tripLength: 0, camping: 0, minimumTripTemperature:5, rain:0 });
  const [selectedCamping, setSelectedCamping] = useState<number>(1);
  const [selectedRain, setSelectedRain] = useState<number>(1);

  const handleTripLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prevState) => ({ ...prevState, tripLength: parseInt(value) }));
  };

  const handleMinimumTripTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prevState) => ({ ...prevState, minimumTripTemperature: parseInt(value) }));
  };

  const handleCampingChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { value } = event.target;
    setSelectedCamping(parseInt(value as string));
  };

  const handleRainChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { value } = event.target;
    setSelectedRain(parseInt(value as string));
  };

  const handleSearch = () => {
    setFormState((prevState) => ({ ...prevState, camping: selectedCamping , rain: selectedRain}));
    console.log(formState);
    runequipment1(formState);
  };

  const runequipment1 = (formData: typeof formState) => {
    console.log('Received form data:', formData);
    // console.log(casefunctions.calculateEquipment(formData).totalcampingv);
    const totalvolume = (casefunctions.calculateEquipment(formData).totalcampingv)+(casefunctions.calculateEquipment(formData).totalhealthbodyv1)
    const totalweight = (casefunctions.calculateEquipment(formData).totalcampingw)+(casefunctions.calculateEquipment(formData).totalhealthbodyw1)
  };

  return (
    <>
    <div
          style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              maxWidth: '500px',
              minHeight: '200px',
          }}
      >
        <ThemeProvider theme={theme}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              variant="outlined" fullWidth
              label="Trip Length"
              type="number"
              value={formState.tripLength}
              placeholder="Enter in number of days"
              onChange={handleTripLengthChange}
              name="tripLength"
              style={{ marginBottom: '1rem', border:'#000000'}}
            />
            <TextField
              label="Minimum Trip Temperature"
              type="number"
              placeholder="Enter in Celcius degree"
              variant="outlined" fullWidth
              value={formState.minimumTripTemperature}
              onChange={handleMinimumTripTemperatureChange}
              name="tripLength"
              style={{ marginBottom: '1rem' }}
            />
            <FormControl margin="normal">
              <InputLabel>Camping</InputLabel>
              <Select
                value={selectedCamping}
                onChange={handleCampingChange}
                variant="outlined"
                name="camping"
                style={{ marginBottom: '0rem' }}
                inputProps={{
                  style: { color: 'black', border: '1px solid black' },
                }}
              >
                <MenuItem value={1}>Yes- I will camp during the route.</MenuItem>
                <MenuItem value={0}>No - I will not camp during the route.</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Rain</InputLabel>
              <Select
                value={selectedRain}
                onChange={handleRainChange}
                variant="outlined"
                name="rain"
                style={{ marginBottom: '0rem' }}
                inputProps={{
                  style: { color: 'black', border: '1px solid black' },
                }}
              >
                <MenuItem value={1}>Yes- It will rain on the route.</MenuItem>
                <MenuItem value={0}>No - It will not rain on the route.</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained"
                            style={{ marginTop: '18px', backgroundColor: 'gray', color: 'black', maxWidth: '200px' }} onClick={handleSearch}>
              Search
            </Button>
          </div>
        </ThemeProvider>
    </div>
    <div style={{ display: 'flex', width: '90%', margin: 'auto', marginTop:'20px' }}>
            <div style={{ backgroundColor: 'gray', borderRadius: '10px', padding: '10px', marginRight: '20px' }}>
                <p style={{ color: 'black', margin: '0' }}>Total Volume </p>
            </div>
            <div style={{ backgroundColor: 'gray', borderRadius: '10px', padding: '10px' }}>
                <p style={{ color: 'black', margin: '0' }}>Total Weight</p>
            </div>
        </div>
    </>
  );
};

export default Form;