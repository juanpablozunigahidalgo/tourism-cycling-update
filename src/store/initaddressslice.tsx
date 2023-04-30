import { createSlice } from '@reduxjs/toolkit';

const initaddressSlice = createSlice({
  name: 'initaddress',
  initialState: '',
  reducers: {
    setInitaddress: (state, action) => {
      return action.payload;
    }
  }
});

export const { setInitaddress } = initaddressSlice.actions;
export default initaddressSlice.reducer;