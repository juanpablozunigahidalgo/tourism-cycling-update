import { setInitaddress } from './initaddressslice';
import { setDestaddress } from './destaddressslice';
import { setMode } from './modeslice';

export const setInitialAddress = (address: any) => {
  return (dispatch: (arg0: { payload: any; type: "initaddress/setInitaddress"; }) => void) => {
    dispatch(setInitaddress(address));
  };
};

export const setDestinationAddress = (address: any) => {
  return (dispatch: (arg0: { payload: any; type: "destaddress/setDestaddress"; }) => void) => {
    dispatch(setDestaddress(address));
  };
};

export const setTravelMode = (mode: any) => {
  return (dispatch: (arg0: { payload: any; type: "mode/setMode"; }) => void) => {
    dispatch(setMode(mode));
  };
};