import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

type Props = {
  initialAddress?: string;
  destinationAddress?: string;
  travelingMode?: google.maps.TravelMode;
  estimatedAverageSpeed:number;
  estimatedHoursPerDayCycling:number;
  restingDays:number;
  budgetPerDay:number;
};

const DistanceCalculator: React.FC<Props> = ({
  initialAddress = "",
  destinationAddress = "",
  travelingMode = google.maps.TravelMode.DRIVING,
  estimatedAverageSpeed= 0,
  estimatedHoursPerDayCycling = 0 ,
  restingDays= 0,
  budgetPerDay= 0,
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


  let totalRidingHours;
    if (estimatedAverageSpeed > 0) {
      totalRidingHours = totalDistance / estimatedAverageSpeed;
    } else {
      totalRidingHours = 0;
    }
  let daysNeeded;
    if (estimatedHoursPerDayCycling > 0) {
      daysNeeded = Math.ceil((totalRidingHours / estimatedHoursPerDayCycling) + restingDays);
    } else {
      daysNeeded = 0;
    }
  const totalCosts = daysNeeded * budgetPerDay;


  return (
    <>
      <Typography sx={{ fontFamily: "Consolas", paddingLeft: "5%", fontSize: "1rem" }}>
        Total distance: <span style={{ fontWeight: 600 }}>{totalDistance}</span> km.
      </Typography>
      <Typography sx={{ fontFamily: "Consolas", paddingLeft: "5%", fontSize: "1rem" }}>
        Total riding hours: <span style={{ fontWeight: 600 }}>{totalRidingHours.toFixed(2)}</span> hours.
      </Typography>
      <Typography sx={{ fontFamily: "Consolas", paddingLeft: "5%", fontSize: "1rem" }}>
        Days needed: <span style={{ fontWeight: 600 }}>{daysNeeded}</span> days.
      </Typography>
      <Typography sx={{ fontFamily: "Consolas", paddingLeft: "5%", fontSize: "1rem" }}>
        Total costs: <span style={{ fontWeight: 600 }}>{totalCosts}</span> USD.
      </Typography>
    </>
  );
};

export default DistanceCalculator;

