import React, { useState, useEffect } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

interface MapProps {
  initialAddress?: string;
  destinationAddress?: string;
  travelingMode?: google.maps.TravelMode;
}

const europeCenter = { lat: 50, lng: 10 };

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
    }
  }, [initialAddress, destinationAddress, travelingMode]);

  return (
    <GoogleMap center={europeCenter} zoom={4}>
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Mapdisplay;