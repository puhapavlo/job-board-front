import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  category: null,
  type: null,
  location: null,
}

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    }
  },
  extraReducers: {},
})

export const { setCategory, setType, setLocation } = jobSlice.actions;

export default jobSlice.reducer;
