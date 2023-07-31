import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "locationdata",
  initialState: { city: "" },
  reducers: {
    setCityName: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCityName } = locationSlice.actions;
export default locationSlice.reducer;
