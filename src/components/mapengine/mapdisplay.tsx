import React, { useState, useEffect } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

interface MapProps {
  initialAddress?: string;
  destinationAddress?: string;
  travelingMode?: google.maps.TravelMode;
}

const europeCenter = { lat: 51.1657, lng: 10.4515 };

const Mapdisplay: React.FC<MapProps> = ({
  initialAddress,
  destinationAddress,
  travelingMode = google.maps.TravelMode.DRIVING,
}) => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(
    null
  );

  useEffect(() => {
    if (initialAddress && destinationAddress) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: initialAddress,
          destination: destinationAddress,
          travelMode: travelingMode,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          }
        }
      );
    } else {
      setDirections(null); // set directions to null if no initialAddress or destinationAddress is provided
    }
  }, [initialAddress, destinationAddress, travelingMode]);

  const mapContainerStyle = {
    width: "90%",
    height: "400px",
    marginLeft: "5%",
   
  };

  const center = directions ? undefined : europeCenter;

  return (
    
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={3}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Mapdisplay;