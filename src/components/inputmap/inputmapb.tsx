import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem } from '@mui/material';

interface Props {}

const SearchForm: React.FC<Props> = () => {
  const [initialAddress, setInitialAddressState] = useState<string>('');
  const [destinationAddress, setDestinationAddressState] = useState<string>('');
  const [travelingMode, setTravelingModeState] = useState<string>('');

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

  const handleTravelModeChange = (value: string) => {
    setTravelingModeState(value);
  };


  return (
    <div
      style={{
        paddingLeft: '5%',
        paddingRight: '5%',
        maxWidth:'600px',
        minHeight:'400px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="initialAddress"
            label="Initial Address"
            variant="outlined"
            fullWidth
            value={initialAddress}
            onChange={handleInitialAddressInputChange}
            inputRef={(input) => input && initAutocomplete(input, true)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            id="destinationAddress"
            label="Destination Address"
            variant="outlined"
            fullWidth
            value={destinationAddress}
            onChange={handleDestinationAddressInputChange}
            style={{ marginBottom: '1rem' }}
            inputRef={(input) => input && initAutocomplete(input, false)}
          />
          <Select
            labelId="travelMode-label"
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
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ backgroundColor: 'gray', color: 'black', maxWidth: '200px' }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchForm;
