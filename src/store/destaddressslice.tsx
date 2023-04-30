import { createSlice } from '@reduxjs/toolkit';

const destaddressSlice = createSlice({
  name: 'destaddress',
  initialState: '',
  reducers: {
    setDestaddress: (state, action) => {
      return action.payload;
    }
  }
});

export const { setDestaddress } = destaddressSlice.actions;
export default destaddressSlice.reducer;