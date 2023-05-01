import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDestinationAddress, setInitialAddress } from '../../store/actions';


interface Props {}

const SearchForm: React.FC<Props> = () => {

  
  const [initialAddress, setInitialAddressState] = useState<string>('');
  const [destinationAddress, setDestinationAddressState] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setInitialAddress(initialAddress));
    dispatch(setDestinationAddress(destinationAddress));
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
      // componentRestrictions: { country: 'us' },
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

  return (
    
    <div>
      
      <label htmlFor="initialAddress">Initial Address:</label>
      <input
        id="initialAddress"
        type="text"
        value={initialAddress}
        onChange={handleInitialAddressInputChange}
        ref={(input) => input && initAutocomplete(input, true)}
      />
      <label htmlFor="destinationAddress">Destination Address:</label>
      <input
        id="destinationAddress"
        type="text"
        value={destinationAddress}
        onChange={handleDestinationAddressInputChange}
        ref={(input) => input && initAutocomplete(input, false)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;