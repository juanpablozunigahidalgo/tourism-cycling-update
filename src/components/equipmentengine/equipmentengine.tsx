//Imports required to run the code.
import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import * as casefunctions from './casefunctions';
import './equipmentengine.scss';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

type TableDataItem = {
  itemName: string;
  quantity: number;
  itemweight: number;
  itemvolume: number;
  itemlink: string;
};

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
            color: '#142952', // Change input text color
          },
          '& .MuiInputLabel-root': {
            color: '#142952', // Change input label color
            '&.Mui-focused': {
              color: '#142952', // Change input label color on focus
            },
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#142952', // Change border color on focus
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '&:hover:not(.Mui-disabled):before': {
            borderColor: '#142952', // Change select menu border color on hover
          },
          '&:before': {
            borderColor: '#142952', // Change select menu border color
          },
          '&.Mui-focused fieldset': {
            borderColor: '#142952', // Change border color on focus
          },
        },
        icon: {
          color: '#142952', // Change select menu icon color
        },
      },
    },
  },
});
//Component function. Notice that the Form is a set of functions with state.
const Form = () => {
  //State variables for input-initial values.
  const [formState, setFormState] = useState<FormState>({ tripLength: 0, camping: 0, minimumTripTemperature:0, rain:0 });
  const [selectedCamping, setSelectedCamping] = useState(0);
  const [selectedRain, setSelectedRain] = useState(0);
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
  //State Variables for table display section
  //Firt function Table Data
  const [tablecampingData, setCampingData] = useState<TableDataItem[]>([]);
  //Second function Table Data
  const [tablebikeData, setBikeData] = useState<TableDataItem[]>([]);
  //Third function Table Data
  const [tableclothingData, setClothingData] = useState<TableDataItem[]>([]);
  //health/bike/electronics/documents/

  const handleTripLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prevState) => ({ ...prevState, tripLength: parseInt(value) }));
  };

  const handleMinimumTripTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prevState) => ({ ...prevState, minimumTripTemperature: parseInt(value) }));
  };

  const handleCampingChange = (event: { target: { value: any; }; }) => {
    const { value } = event.target;
    setSelectedCamping(parseInt(value));
  };

  const handleRainChange = (event: { target: { value: any; }; }) => {
    const { value } = event.target;
    setSelectedRain(parseInt(value));
  };

  const handleSearch = () => {
    calctotalequipment(formState);
    calcspecificsequipment(formState);
    setFormState((prevState) => ({ ...prevState, camping: selectedCamping , rain: selectedRain}));
  };
//This function sums up the equipment volume.
  const calctotalequipment = (formData: typeof formState) => {
    // console.log(casefunctions.calculateEquipment(formData).totalcampingv);
    const totalvolume = Math.round((casefunctions.calculateEquipment1(formData).totalcampingv)+
    (casefunctions.calculateEquipment1(formData).totalhealthbodyv1)+
    (casefunctions.calculateEquipment2(formData).totalbikerelatedv)+
    (casefunctions.calculateEquipment2(formData).totalelectronicsv)+
    (casefunctions.calculateEquipment2(formData).totalhealthbodyv2)+
    (casefunctions.calculateEquipment2(formData).totaldocumv)+
    (casefunctions.calculateEquipment3(formData).totalropav)
    )
    ;
    const totalweight = Math.round(casefunctions.calculateEquipment1(formData).totalcampingw)+
    (casefunctions.calculateEquipment1(formData).totalhealthbodyw1)+
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
    //camping
    const campingvolume = Math.round((casefunctions.calculateEquipment1(formData).totalcampingv));
    const campingweight = Math.round((casefunctions.calculateEquipment1(formData).totalcampingw));
    //health
    const healthvolume = Math.round((casefunctions.calculateEquipment1(formData).totalhealthbodyv1)+(casefunctions.calculateEquipment2(formData).totalhealthbodyv2));
    const healthweight = Math.round((casefunctions.calculateEquipment1(formData).totalhealthbodyw1)+(casefunctions.calculateEquipment2(formData).totalhealthbodyw2));
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
    //Set Tables
    const tableData1 = (casefunctions.calculateEquipment1(formData).tableData);
    const tableData2 = (casefunctions.calculateEquipment2(formData).tableData);
    const tableData3 = (casefunctions.calculateEquipment3(formData).tableData);

    //now it sets state for each variable. 
    setCampingData(tableData1);
    setBikeData(tableData2);
    setClothingData(tableData3);
    setSelectedcampingvolume((campingvolume));
    setSelectedcampingweight((campingweight));
    setSelectedhealthvolume((healthvolume));
    setSelectedhealthweight((healthweight));
    setSelectedbikerelatedvolume((bikeequipmentvolume));
    setSelectedbikerelatedweight((bikeequipmentweight));
    setSelectedelectronicsvolume((electronicsvolume));
    setSelectedelectronicsweight((electronicsweight));
    setSelecteddocumentsvolume((documentsvolume));
    setSelecteddocumentsweight((documentsweight));
    setSelectedropavolume((ropavolume));
    setSelectedropaweight((ropaweight)); 
    console.log(selectedcampingvolume);
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
              label="Trip Length [Days]"
              type="number"
              value={formState.tripLength}
              placeholder="Enter in number of days"
              onChange={handleTripLengthChange}
              name="tripLength"
              style={{ marginBottom: '1rem', color: '#142952', borderColor:'#142952'}}
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
              style={{ marginBottom: '1rem' ,color: '#142952', borderColor:'#142952'}}
            />
            <FormControl margin="normal" >
              <Select
                value={selectedCamping}
                onChange={handleCampingChange}
                variant="outlined"
                style={{ marginBottom: '0rem' , color: '#142952'}}
                inputProps={{
                  style: { color: '#142952'},
                }}
              >
                <MenuItem value={1} >Yes- I will camp during the route.</MenuItem>
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
                  style: { color: '#142952'},
                }} displayEmpty
              >
                <MenuItem value={1}>Yes- It will rain on the route.</MenuItem>
                <MenuItem value={0}>No - It will not rain on the route.</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              style={{ marginTop: '18px', backgroundColor: '#142952', color: 'white', maxWidth: '200px' }}
              onClick={() => {
                handleSearch(); // First invocation of handleSearch
              }}
            >
              Search

            </Button>
          </div>
        </ThemeProvider>
    </div>
    <div style={{ width: '90%', margin: 'auto', marginTop: '5%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ color:'white', minWidth: '300px', backgroundColor: '#142952', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}>
          <p>Total volume: {selectedtotalvolume !== 0 ? selectedtotalvolume : "-"} [Liter]</p>
        </div>
        <div style={{color:'white', minWidth: '300px', backgroundColor: '#142952', borderRadius: '10px', padding: '10px' }}>
          <p>Total Weight: {selectedtotalweight !== 0 ? selectedtotalweight : "-"} [Kg]</p>
        </div>
    </div>

    {/* <PieChartComponentvolume selectedcampingvolume={selectedcampingvolume} selectedhealthvolume={selectedhealthvolume} selectedbikerelatedvolume={selectedbikerelatedvolume} selectedelectronicsvolume={selectedelectronicsvolume} selectedeldocumentsvolume={selectedeldocumentsvolume} selectedropavolume={selectedropavolume}></PieChartComponentvolume> */}
    
    </div>
    {/* Here is the table section div */}
    <div style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '5%' ,
              color: '#142952',
          }}>
    {/* camping section table */}
      <div> 
          <h2>Equipment Detail List.</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Weight [Kg] </TableCell>
                  <TableCell>Volume [Lt] </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <h3>Camping</h3>
                {tablecampingData.map((item: TableDataItem) => (
                  <TableRow key={item.itemName}>
                    <TableCell><a href={item.itemlink}>{item.itemName}</a></TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.itemweight/1000}</TableCell>
                    <TableCell>{item.itemvolume}</TableCell>
                </TableRow>
                ))}
              </TableBody>
              <TableBody>
              <h3>Bike related</h3>
                {tablebikeData.map((item: TableDataItem) => (
                  <TableRow key={item.itemName}>
                    <TableCell><a href={item.itemlink}>{item.itemName}</a></TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.itemweight/1000}</TableCell>
                    <TableCell>{item.itemvolume}</TableCell>
                </TableRow>
                ))}
              </TableBody>
              <TableBody>
                <h3>Clothing</h3>
                {tableclothingData.map((item: TableDataItem) => (
                  <TableRow key={item.itemName}>
                    <TableCell><a href={item.itemlink}>{item.itemName}</a></TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.itemweight/1000}</TableCell>
                    <TableCell>{item.itemvolume}</TableCell>
                </TableRow>
                ))}
              </TableBody>
          </Table>
      </div>
    </div>
    </>
  );
};

export default Form;

function mathRound(totalvolume: number): React.SetStateAction<number> {
  throw new Error('Function not implemented.');
}
