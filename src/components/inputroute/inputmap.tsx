import React, { useState } from 'react';
import axios from 'axios';

type TravelMode = 'driving' | 'walking' | 'cycling';

type InputMapProps = {
  onSearch: (initialAddress: string, destination: string, travelMode: TravelMode) => void;
};

const InputMap: React.FC<InputMapProps> = ({ onSearch }) => {
  const [initialAddress, setInitialAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState<TravelMode>('driving');

  const handleInitialAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInitialAddress(event.target.value);
    // Call the openrouteservice API to suggest addresses
    axios
      .get(`https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484bcc2d4a7e6046bc93a6d7f6e36da845&text=${event.target.value}`)
      .then((response) => {
        console.log(response.data.features.map((feature: any) => feature.properties.label));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handleTravelModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTravelMode(event.target.value as TravelMode);
  };

  const handleSearchClick = () => {
    onSearch(initialAddress, destination, travelMode);
  };

  return (
    <div>
      <label htmlFor="initialAddress">Initial Address:</label>
      <input type="text" id="initialAddress" value={initialAddress} onChange={handleInitialAddressChange} />

      <br />

      <label htmlFor="destination">Destination:</label>
      <input type="text" id="destination" value={destination} onChange={handleDestinationChange} />

      <br />

      <label htmlFor="travelMode">Travel Mode:</label>
      <select id="travelMode" value={travelMode} onChange={handleTravelModeChange}>
        <option value="driving">Driving</option>
        <option value="walking">Walking</option>
        <option value="cycling">Cycling</option>
      </select>

      <br />

      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default InputMap;