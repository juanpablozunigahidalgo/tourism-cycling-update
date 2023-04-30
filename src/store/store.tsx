import { configureStore } from '@reduxjs/toolkit';
import initaddressReducer from './initaddressSlice';
import destaddressReducer from './destaddressSlice';
import modeReducer from './modeSlice';

const store = configureStore({
  reducer: {
    initialAddress: initaddressReducer,
    destinationAddress: destaddressReducer,
    travelMode: modeReducer
  }
});

export default store;