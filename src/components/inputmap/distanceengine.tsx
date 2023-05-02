import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

type Props = {
  initialAddress?: string;
  destinationAddress?: string;
  travelingMode?: google.maps.TravelMode;
};

const DistanceCalculator: React.FC<Props> = ({
  initialAddress = "",
  destinationAddress = "",
  travelingMode = google.maps.TravelMode.DRIVING,
}) => {
  const [totalDistance, setTotalDistance] = useState<number>(0);

  useEffect(() => {
    if (initialAddress && destinationAddress) {
      const directionsService = new google.maps.DirectionsService();
      const request = {
        origin: initialAddress,
        destination: destinationAddress,
        travelMode: travelingMode,
      };

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const totalDistanceInMeters =
            result?.routes[0]?.legs[0]?.distance?.value ?? 0;
          setTotalDistance(totalDistanceInMeters / 1000);
        } else {
          console.error("Error fetching directions:", status);
        }
      });
    }
  }, [initialAddress, destinationAddress, travelingMode]);

  return (
    <Typography sx={{ fontFamily: "Consolas", paddingTop: "5%", paddingLeft: "5%" }}>
      Total distance: {totalDistance} km.
    </Typography>
  );
};

export default DistanceCalculator;
