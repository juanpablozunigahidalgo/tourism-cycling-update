import React, { useRef, useEffect } from "react";

interface InputMapStartProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

const InputMapStart: React.FC<InputMapStartProps> = ({ onPlaceSelected }) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete>();

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place) {
      onPlaceSelected(place);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAl-NAQCJ332WGr3zqsAwvTmf5z8O88zrA&libraries=places`;
    script.async = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScriptLoad = () => {
    const input = document.getElementById("input-map-start") as HTMLInputElement;
    if (input) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(input);
      autocompleteRef.current.addListener("place_changed", handlePlaceChanged);
    }
  };

  return (
    <>
      <input id="input-map-start" type="text" placeholder="Enter an address" />
    </>
  );
};

export default InputMapStart;