import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

interface FormState {
  minimumTripTemperature: number;
  tripLength: number;
  camping: number;
  rain: number;
}

const Form = () => {
  const [formState, setFormState] = useState<FormState>({ tripLength: 0, camping: 1, minimumTripTemperature:5, rain:1 });
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
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        label="Trip Length"
        type="number"
        value={formState.tripLength}
        onChange={handleTripLengthChange}
        name="tripLength"
        margin="normal"
      />
      <TextField
        label="Minimum Trip Temperature"
        type="number"
        value={formState.minimumTripTemperature}
        onChange={handleMinimumTripTemperatureChange}
        name="tripLength"
        margin="normal"
      />
      <FormControl margin="normal">
        <InputLabel>Camping</InputLabel>
        <Select
          value={selectedCamping}
          onChange={handleCampingChange}
          name="camping"
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
          name="rain"
          inputProps={{
            style: { color: 'black', border: '1px solid black' },
          }}
        >
          <MenuItem value={1}>Yes- It will rain on the route.</MenuItem>
          <MenuItem value={0}>No - It will not rain on the route.</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Form;