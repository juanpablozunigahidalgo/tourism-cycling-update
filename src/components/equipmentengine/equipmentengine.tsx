//Imports required to run the code.
import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import * as casefunctions from './casefunctions';
import './equipmentengine.scss';


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
  //State variables for input-initial values.
  const [formState, setFormState] = useState<FormState>({ tripLength: 0, camping: 0, minimumTripTemperature:0, rain:0 });
  const [selectedCamping, setSelectedCamping] = useState<number>(1);
  const [selectedRain, setSelectedRain] = useState<number>(1);
  //State variables for caculation-initial values. Overall statistics.
  const [selectedtotalvolume, setSelectedtotalvolume] = useState<number>(0);
  const [selectedtotalweight, setSelectedtotalweight] = useState<number>(0);
  //State variables for calculations. 
  const [selectedcampingvolume, setSelectedcampingvolume] = useState<number>(0);
  const [selectedcampingweight, setSelectedcampingweight] = useState<number>(0);
  const [selectedhealthvolume, setSelectedhealthvolume] = useState<number>(0);
  const [selectedhealthweight, setSelectedhealthweight] = useState<number>(0);
  const [selectedbikerelatedvolume, setSelectedbikerelatedvolume] = useState<number>(0);
  const [selectedbikerelatedweight, setSelectedbikerelatedweight] = useState<number>(0);
  const [selectedelectronicsvolume, setSelectedelectronicsvolume] = useState<number>(0);
  const [selectedelectronicsweight, setSelectedelectronicsweight] = useState<number>(0);
  const [selectedeldocumentsvolume, setSelecteddocumentsvolume] = useState<number>(0);
  const [selectedeldocumentsweight, setSelecteddocumentsweight] = useState<number>(0);
  const [selectedropavolume, setSelectedropavolume] = useState<number>(0);
  const [selectedropaweight, setSelectedropaweight] = useState<number>(0);

  //health/bike/electronics/documents/

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
    calctotalequipment(formState);
  };
//This function sums up the equipment volume.
  const calctotalequipment = (formData: typeof formState) => {
    console.log('Received form data:', formData);
    // console.log(casefunctions.calculateEquipment(formData).totalcampingv);
    const totalvolume = Math.round((casefunctions.calculateEquipment(formData).totalcampingv)+
    (casefunctions.calculateEquipment(formData).totalhealthbodyv1)+
    (casefunctions.calculateEquipment2(formData).totalbikerelatedv)+
    (casefunctions.calculateEquipment2(formData).totalelectronicsv)+
    (casefunctions.calculateEquipment2(formData).totalhealthbodyv2)+
    (casefunctions.calculateEquipment2(formData).totaldocumv)+
    (casefunctions.calculateEquipment3(formData).totalropav)
    )
    ;
    const totalweight = Math.round(casefunctions.calculateEquipment(formData).totalcampingw)+
    (casefunctions.calculateEquipment(formData).totalhealthbodyw1)+
    (casefunctions.calculateEquipment2(formData).totalbikerelatedw)+
    (casefunctions.calculateEquipment2(formData).totalelectronicsw)+
    (casefunctions.calculateEquipment2(formData).totalhealthbodyw2)+
    (casefunctions.calculateEquipment2(formData).totaldocumw)+
    (casefunctions.calculateEquipment3(formData).totalropaw)
    ;
    setSelectedtotalvolume(Math.round(totalvolume));
    setSelectedtotalweight(Math.round(totalweight));
    return {totalvolume, totalweight};
  };

  //This function resumes the equipment split.
  //camping/health/bike/electronics/documents/
  const calcspecificsequipment = (formData: typeof formState) => {
    console.log('Received form data:', formData);
    //camping
    const campingvolume = Math.round((casefunctions.calculateEquipment(formData).totalcampingv));
    const campingweight = Math.round((casefunctions.calculateEquipment(formData).totalcampingw));
    //health
    const healthvolume = Math.round((casefunctions.calculateEquipment(formData).totalhealthbodyv1)+(casefunctions.calculateEquipment2(formData).totalhealthbodyv2));
    const healthweight = Math.round((casefunctions.calculateEquipment(formData).totalhealthbodyw1)+(casefunctions.calculateEquipment2(formData).totalhealthbodyw2));
    //bike
    const bikeequipmentvolume = Math.round(casefunctions.calculateEquipment2(formData).totalbikerelatedv);
    const bikeequipmentweight = Math.round(casefunctions.calculateEquipment2(formData).totalbikerelatedw);
    //electronics
    const electronicsvolume = Math.round(casefunctions.calculateEquipment2(formData).totalelectronicsv);
    const electronicsweight = Math.round(casefunctions.calculateEquipment2(formData).totalelectronicsw);
    //documents
    const documentsvolume = Math.round(casefunctions.calculateEquipment2(formData).totaldocumv);
    const documentsweight = Math.round(casefunctions.calculateEquipment2(formData).totaldocumw);
    //clothing
    const ropavolume = (casefunctions.calculateEquipment3(formData).totalropav); 
    const ropaweight = (casefunctions.calculateEquipment3(formData).totalropaw); 
    //now it sets state for each variable. 
    setSelectedcampingvolume(Math.round(campingvolume));
    setSelectedcampingweight(Math.round(campingweight));
    setSelectedhealthvolume(Math.round(healthvolume));
    setSelectedhealthweight(Math.round(healthweight));
    setSelectedbikerelatedvolume(Math.round(bikeequipmentvolume));
    setSelectedbikerelatedweight(Math.round(bikeequipmentweight));
    setSelectedelectronicsvolume(Math.round(electronicsvolume));
    setSelectedelectronicsweight(Math.round(electronicsweight));
    setSelecteddocumentsvolume(Math.round(documentsvolume));
    setSelecteddocumentsweight(Math.round(documentsweight));
    setSelectedropavolume(Math.round(ropavolume));
    setSelectedropaweight(Math.round(ropaweight)); 



    return {campingvolume, campingweight,healthvolume,healthweight,bikeequipmentvolume,bikeequipmentweight,electronicsvolume,electronicsweight,documentsvolume,documentsweight,ropavolume,ropaweight};
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
              onKeyPress={(event) => {
                const charCode = event.which ? event.which : event.keyCode;
                if (charCode < 48 ) {
                  event.preventDefault();
                }
              }}
              inputProps={{ min: "0" }}
            />
            <TextField
              label="Minimum Trip Temperature [C]"
              type="number"
              placeholder="Enter in Celcius degree"
              variant="outlined" fullWidth
              value={formState.minimumTripTemperature}
              onChange={handleMinimumTripTemperatureChange}
              name="tripLength"
              style={{ marginBottom: '1rem' }}
            />
            <FormControl margin="normal" >
              {/* <InputLabel>Camping</InputLabel> */}
              <Select
                value={selectedCamping}
                onChange={handleCampingChange}
                variant="outlined"
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
              {/* <InputLabel>Rain</InputLabel> */}
              <Select
                value={selectedRain}
                onChange={handleRainChange}
                variant="outlined"
                style={{ marginBottom: '0rem' }}
                inputProps={{
                  style: { color: 'black', border: '1px solid black' },
                }} displayEmpty
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
            <p>Total volume: {selectedtotalvolume !== 0 ? selectedtotalvolume : "-"} [Liter]</p>
            </div>
            <div style={{ backgroundColor: 'gray', borderRadius: '10px', padding: '10px' }}>
                <p style={{ color: 'black', margin: '0' }}>Total Weight: {selectedtotalweight !== 0 ? selectedtotalweight : "-"} [Kg]</p>
            </div>
        </div>
    </>
  );
};

export default Form;

function mathRound(totalvolume: number): React.SetStateAction<number> {
  throw new Error('Function not implemented.');
}
